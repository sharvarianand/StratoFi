
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

// Mock prediction data
const predictionData = [
  { day: 1, actual: 145, predicted: null },
  { day: 2, actual: 147, predicted: null },
  { day: 3, actual: 146, predicted: null },
  { day: 4, actual: 148, predicted: null },
  { day: 5, actual: 150, predicted: null },
  { day: 6, actual: 153, predicted: null },
  { day: 7, actual: 155, predicted: null },
  { day: 8, actual: null, predicted: 158 },
  { day: 9, actual: null, predicted: 160 },
  { day: 10, actual: null, predicted: 163 },
  { day: 11, actual: null, predicted: 165 },
  { day: 12, actual: null, predicted: 166 },
  { day: 13, actual: null, predicted: 169 },
  { day: 14, actual: null, predicted: 171 },
];

// Prediction stocks
const predictionStocks = [
  { 
    symbol: "AAPL", 
    name: "Apple Inc.", 
    currentPrice: "$187.45", 
    predictedPrice: "$210.30",
    change: "+12.2%",
    confidence: "94%",
    timeframe: "60 days"
  },
  { 
    symbol: "MSFT", 
    name: "Microsoft Corp.", 
    currentPrice: "$412.78", 
    predictedPrice: "$450.15",
    change: "+9.1%",
    confidence: "91%",
    timeframe: "60 days"
  },
  { 
    symbol: "GOOGL", 
    name: "Alphabet Inc.", 
    currentPrice: "$142.65", 
    predictedPrice: "$165.80",
    change: "+16.2%",
    confidence: "87%",
    timeframe: "60 days"
  },
  { 
    symbol: "AMZN", 
    name: "Amazon.com Inc.", 
    currentPrice: "$178.35", 
    predictedPrice: "$205.45",
    change: "+15.2%",
    confidence: "89%",
    timeframe: "60 days"
  }
];

const AIPredictions = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">AI Predictions</h1>
          <Badge variant="outline" className="bg-primary/20 text-primary">
            <Bot className="h-3 w-3 mr-1" /> AI Powered
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Model version:</span>
          <span className="text-sm font-medium">4.2.1</span>
        </div>
      </div>

      {/* AI explanation */}
      <Card className="glass-card border-primary/20">
        <CardContent className="p-4">
          <p className="text-sm">
            Our AI models analyze thousands of market variables, news sentiment, economic indicators, and historical patterns 
            to generate highly accurate price predictions. Current model accuracy: <span className="text-primary font-medium">93.7%</span>
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main prediction chart */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle>AAPL Price Prediction</CardTitle>
            <CardDescription>7-day forecast with historical data</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={predictionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                  }}
                />
                <ReferenceLine x={7} stroke="#888" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} name="Actual Price" />
                <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} name="Predicted Price" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI confidence metric */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Model Confidence</CardTitle>
            <CardDescription>Prediction reliability metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Overall Confidence</span>
                  <span className="text-sm font-bold text-green-500">94%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "94%" }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Data Quality</span>
                  <span className="text-sm font-bold text-green-500">98%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "98%" }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Market Volatility</span>
                  <span className="text-sm font-bold text-yellow-500">Medium</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">External Factors</span>
                  <span className="text-sm font-bold text-green-500">Low Impact</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prediction table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Top AI Stock Predictions</CardTitle>
          <CardDescription>60-day price forecasts with confidence levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-sm">Symbol</th>
                  <th className="text-left p-3 text-sm">Name</th>
                  <th className="text-right p-3 text-sm">Current</th>
                  <th className="text-right p-3 text-sm">Predicted</th>
                  <th className="text-right p-3 text-sm">Change</th>
                  <th className="text-right p-3 text-sm">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {predictionStocks.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 font-medium">{stock.symbol}</td>
                    <td className="p-3 text-sm">{stock.name}</td>
                    <td className="p-3 text-right">{stock.currentPrice}</td>
                    <td className="p-3 text-right text-green-500 font-medium">{stock.predictedPrice}</td>
                    <td className="p-3 text-right text-green-500">{stock.change}</td>
                    <td className="p-3 text-right">{stock.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPredictions;
