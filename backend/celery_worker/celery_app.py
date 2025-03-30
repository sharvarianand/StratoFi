import os
from celery import Celery
from celery.schedules import crontab
import yfinance as yf
import pandas as pd
from datetime import datetime, timedelta
import groq
from langchain.llms import Groq
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Celery app
app = Celery('strato_fi',
             broker=os.getenv('REDIS_URL', 'redis://localhost:6379/0'),
             backend=os.getenv('REDIS_URL', 'redis://localhost:6379/0'))

# Celery Configuration
app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
    task_track_started=True,
    task_time_limit=3600,  # 1 hour
    worker_max_tasks_per_child=100,
    worker_prefetch_multiplier=1,
)

# Initialize Groq client
groq_client = groq.Groq(api_key=os.getenv('GROQ_API_KEY'))
llm = Groq(
    groq_api_key=os.getenv('GROQ_API_KEY'),
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

# Periodic Tasks
@app.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Update market data every hour
    sender.add_periodic_task(
        crontab(minute=0, hour='*'),
        update_market_data.s()
    )
    
    # Generate daily market insights
    sender.add_periodic_task(
        crontab(minute=0, hour=0),
        generate_daily_insights.s()
    )
    
    # Update forecasts weekly
    sender.add_periodic_task(
        crontab(minute=0, hour=0, day_of_week='monday'),
        update_weekly_forecasts.s()
    )

# Tasks
@app.task
def update_market_data():
    """Update market data for tracked symbols"""
    try:
        # Get list of tracked symbols from database
        # For now, using a sample list
        symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META']
        
        for symbol in symbols:
            stock = yf.Ticker(symbol)
            hist = stock.history(period="1d")
            
            # Store the data in Redis or database
            # This is a placeholder for actual implementation
            print(f"Updated market data for {symbol}")
            
    except Exception as e:
        print(f"Error updating market data: {str(e)}")
        raise

@app.task
def generate_daily_insights():
    """Generate daily market insights using AI"""
    try:
        # Get market data for analysis
        symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META']
        
        for symbol in symbols:
            stock = yf.Ticker(symbol)
            hist = stock.history(period="1y")
            
            # Generate insights using AI
            analysis = market_analysis_chain.run(
                stock_data=hist.tail(30).to_string(),
                query="Provide a comprehensive daily market analysis"
            )
            
            # Store insights in database
            # This is a placeholder for actual implementation
            print(f"Generated daily insights for {symbol}")
            
    except Exception as e:
        print(f"Error generating daily insights: {str(e)}")
        raise

@app.task
def update_weekly_forecasts():
    """Update weekly market forecasts"""
    try:
        symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META']
        
        for symbol in symbols:
            stock = yf.Ticker(symbol)
            hist = stock.history(period="5y")
            
            # Generate forecasts using AI
            forecast = forecasting_chain.run(
                historical_data=hist.to_string(),
                timeframe="1 week"
            )
            
            # Store forecasts in database
            # This is a placeholder for actual implementation
            print(f"Updated weekly forecast for {symbol}")
            
    except Exception as e:
        print(f"Error updating weekly forecasts: {str(e)}")
        raise

@app.task
def analyze_market_data(symbol: str, query: str):
    """Analyze market data for a specific symbol"""
    try:
        stock = yf.Ticker(symbol)
        hist = stock.history(period="1y")
        
        analysis = market_analysis_chain.run(
            stock_data=hist.tail(30).to_string(),
            query=query
        )
        
        return {
            "symbol": symbol,
            "analysis": analysis,
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        print(f"Error analyzing market data: {str(e)}")
        raise

@app.task
def generate_forecast(symbol: str, timeframe: str = "1 month"):
    """Generate forecast for a specific symbol"""
    try:
        stock = yf.Ticker(symbol)
        hist = stock.history(period="5y")
        
        forecast = forecasting_chain.run(
            historical_data=hist.to_string(),
            timeframe=timeframe
        )
        
        return {
            "symbol": symbol,
            "forecast": forecast,
            "timeframe": timeframe,
            "timestamp": datetime.utcnow().isoformat()
        }
    except Exception as e:
        print(f"Error generating forecast: {str(e)}")
        raise

if __name__ == '__main__':
    app.start() 