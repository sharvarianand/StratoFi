from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from pydantic_settings import BaseSettings
import uvicorn
from typing import List, Optional
import groq
from langchain.llms import Groq
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Settings
class Settings(BaseSettings):
    GROQ_API_KEY: str
    ALPHA_VANTAGE_API_KEY: str
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]
    
    class Config:
        env_file = ".env"

settings = Settings()

# Initialize FastAPI app
app = FastAPI(
    title="StratoFi AI API",
    description="AI-powered financial insights and predictions API",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Initialize Groq client
groq_client = groq.Groq(api_key=settings.GROQ_API_KEY)
llm = Groq(
    groq_api_key=settings.GROQ_API_KEY,
    model_name="mixtral-8x7b-32768",
    temperature=0.7,
    max_tokens=32768,
)

# Market Analysis Chain
market_analysis_prompt = PromptTemplate(
    input_variables=["stock_data", "query"],
    template="""
    Analyze the following stock market data and provide insights:
    
    Stock Data:
    {stock_data}
    
    Query: {query}
    
    Please provide a detailed analysis including:
    1. Key trends and patterns
    2. Technical indicators
    3. Risk assessment
    4. Recommendations
    """
)

market_analysis_chain = LLMChain(llm=llm, prompt=market_analysis_prompt)

# Financial Forecasting Chain
forecasting_prompt = PromptTemplate(
    input_variables=["historical_data", "timeframe"],
    template="""
    Based on the following historical financial data, provide a forecast for the next {timeframe}:
    
    Historical Data:
    {historical_data}
    
    Please include:
    1. Price predictions
    2. Confidence intervals
    3. Key factors influencing the forecast
    4. Risk factors to consider
    """
)

forecasting_chain = LLMChain(llm=llm, prompt=forecasting_prompt)

@app.get("/")
async def root():
    return {"message": "Welcome to StratoFi AI API"}

@app.get("/api/market-analysis/{symbol}")
async def analyze_market(symbol: str, query: str):
    try:
        # Fetch stock data
        stock = yf.Ticker(symbol)
        hist = stock.history(period="1y")
        
        # Prepare data for analysis
        stock_data = hist.tail(30).to_string()
        
        # Get AI analysis
        analysis = market_analysis_chain.run(
            stock_data=stock_data,
            query=query
        )
        
        return {
            "symbol": symbol,
            "analysis": analysis,
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/forecast/{symbol}")
async def forecast_stock(symbol: str, timeframe: str = "1 month"):
    try:
        # Fetch historical data
        stock = yf.Ticker(symbol)
        hist = stock.history(period="5y")
        
        # Prepare data for forecasting
        historical_data = hist.to_string()
        
        # Get AI forecast
        forecast = forecasting_chain.run(
            historical_data=historical_data,
            timeframe=timeframe
        )
        
        return {
            "symbol": symbol,
            "forecast": forecast,
            "timeframe": timeframe,
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/chat")
async def chat_with_ai(query: str):
    try:
        # Create a chat completion
        chat_completion = groq_client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are a financial AI assistant providing insights and analysis about markets, stocks, and investment strategies."
                },
                {
                    "role": "user",
                    "content": query
                }
            ],
            model="mixtral-8x7b-32768",
            temperature=0.7,
            max_tokens=32768,
        )
        
        return {
            "response": chat_completion.choices[0].message.content,
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 