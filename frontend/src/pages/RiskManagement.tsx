
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Droplets, Waves, Wind } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock volatility data
const volatilityData = [
  { date: "Jan", market: 15, portfolio: 12 },
  { date: "Feb", market: 18, portfolio: 14 },
  { date: "Mar", market: 25, portfolio: 18 },
  { date: "Apr", market: 20, portfolio: 16 },
  { date: "May", market: 22, portfolio: 17 },
  { date: "Jun", market: 28, portfolio: 19 },
  { date: "Jul", market: 30, portfolio: 20 },
  { date: "Aug", market: 24, portfolio: 18 },
  { date: "Sep", market: 22, portfolio: 17 },
];

// Risk metrics
const riskMetrics = [
  { name: "Portfolio Volatility", value: 18, max: 100, color: "yellow" },
  { name: "Drawdown Risk", value: 24, max: 100, color: "orange" },
  { name: "Concentration Risk", value: 65, max: 100, color: "red" },
  { name: "Liquidity Risk", value: 15, max: 100, color: "green" },
  { name: "Currency Risk", value: 30, max: 100, color: "yellow" },
];

// Risk recommendations
const riskRecommendations = [
  "Reduce technology sector exposure from 42% to 30% to improve diversification.",
  "Consider allocating 10-15% to fixed income assets to decrease portfolio volatility.",
  "Implement stop-loss orders on high-volatility holdings to protect against downside risk.",
  "Increase international exposure to reduce correlation to US market movements.",
];

const RiskManagement = () => {
  // Calculate overall risk score
  const overallRisk = Math.round(riskMetrics.reduce((sum, item) => sum + item.value, 0) / riskMetrics.length);
  
  const getRiskColor = (value: number) => {
    if (value > 70) return "text-red-500";
    if (value > 40) return "text-yellow-500";
    return "text-green-500";
  };
  
  const getRiskLevel = (value: number) => {
    if (value > 70) return "High";
    if (value > 40) return "Moderate";
    return "Low";
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">Risk Management</h1>
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      {/* Overall risk score */}
      <Card className="glass-card">
        <CardContent className="pt-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Overall Risk Score</h3>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-bold ${getRiskColor(overallRisk)}`}>{overallRisk}/100</span>
                <span className={`${getRiskColor(overallRisk)}`}>
                  {getRiskLevel(overallRisk)} Risk
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Updated daily based on market conditions</p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-medium mb-4">Risk Breakdown</h3>
              <div className="space-y-4">
                {riskMetrics.map((metric) => (
                  <div key={metric.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{metric.name}</span>
                      <span className={`font-medium ${getRiskColor(metric.value)}`}>
                        {metric.value}/{metric.max}
                      </span>
                    </div>
                    <Progress 
                      value={metric.value} 
                      className="h-2" 
                      indicatorClassName={`${
                        metric.color === "red" ? "bg-red-500" : 
                        metric.color === "yellow" ? "bg-yellow-500" :
                        metric.color === "orange" ? "bg-orange-500" : "bg-green-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Volatility comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Volatility Analysis</CardTitle>
              <CardDescription>Portfolio volatility vs. market volatility</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={volatilityData}
                  margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Volatility"]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="market" 
                    stroke="#ff7300" 
                    name="Market Volatility" 
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="portfolio" 
                    stroke="#38bdf8" 
                    name="Portfolio Volatility" 
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Risk indicators */}
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Risk Indicators</CardTitle>
              <CardDescription>Key metrics to monitor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-md bg-white/5">
                <TrendingDown className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Maximum Drawdown</h4>
                  <p className="text-xl font-bold text-red-500">-18.3%</p>
                  <p className="text-xs text-muted-foreground">Past 12 months</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-md bg-white/5">
                <Droplets className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Beta</h4>
                  <p className="text-xl font-bold">1.25</p>
                  <p className="text-xs text-muted-foreground">Relative to S&P 500</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-md bg-white/5">
                <Waves className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Sharpe Ratio</h4>
                  <p className="text-xl font-bold">1.82</p>
                  <p className="text-xs text-muted-foreground">Risk-adjusted return</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-md bg-white/5">
                <Wind className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Stress Test</h4>
                  <p className="text-xl font-bold text-yellow-500">-26.4%</p>
                  <p className="text-xs text-muted-foreground">Projected decline in severe market downturn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Recommendations */}
      <Card className="glass-card border-yellow-500/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <CardTitle>AI Risk Recommendations</CardTitle>
          </div>
          <CardDescription>Suggestions to improve your portfolio risk profile</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {riskRecommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p>{recommendation}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskManagement;
