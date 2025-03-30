
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StockChart } from "@/components/StockChart";
import { BarChart } from "@/components/BarChart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for the heatmap
const heatmapData = [
  { name: "Tech", value: 85 },
  { name: "Healthcare", value: 65 },
  { name: "Finance", value: 45 },
  { name: "Energy", value: 30 },
  { name: "Consumer", value: 70 },
  { name: "Materials", value: 40 },
  { name: "Utilities", value: 55 },
];

// Mock data for the trend line
const trendData = Array.from({ length: 30 }, (_, i) => ({
  date: `Day ${i + 1}`,
  sp500: 3500 + Math.random() * 500,
  nasdaq: 11000 + Math.random() * 1000,
  djia: 30000 + Math.random() * 3000,
}));

const MarketTrends = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Market Trends</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm font-medium">Just now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Major indices chart */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Major Indices</CardTitle>
            <CardDescription>30-day performance comparison</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                <YAxis yAxisId="left" stroke="rgba(255,255,255,0.5)" />
                <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.5)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "rgba(0,0,0,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                  }}
                />
                <Line yAxisId="left" type="monotone" dataKey="sp500" stroke="#8884d8" name="S&P 500" />
                <Line yAxisId="left" type="monotone" dataKey="nasdaq" stroke="#82ca9d" name="NASDAQ" />
                <Line yAxisId="right" type="monotone" dataKey="djia" stroke="#ffc658" name="DJIA" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sector performance */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Sector Performance</CardTitle>
            <CardDescription>Weekly change by sector</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <BarChart />
          </CardContent>
        </Card>

        {/* Recent market trends */}
        <Card className="glass-card col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Market Trend Analysis</CardTitle>
            <CardDescription>AI-powered market momentum indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {heatmapData.map((sector) => (
                <div key={sector.name} className="p-4 rounded-lg bg-black/20">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{sector.name}</span>
                    <span className={`text-sm font-bold ${
                      sector.value > 60 ? "text-green-500" : 
                      sector.value < 40 ? "text-red-500" : "text-yellow-500"
                    }`}>
                      {sector.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        sector.value > 60 ? "bg-green-500" : 
                        sector.value < 40 ? "bg-red-500" : "bg-yellow-500"
                      }`}
                      style={{ width: `${sector.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "AI models detect bullish sentiment in technology sector, with 73% probability of continued uptrend.",
                "Recent macroeconomic data suggests increased volatility in energy stocks over the next 14 trading days.",
                "Correlation between growth and value stocks approaching 5-year low, indicating potential rotation."
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3 p-3 border border-white/10 rounded-md">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                  <p className="text-sm">{insight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketTrends;
