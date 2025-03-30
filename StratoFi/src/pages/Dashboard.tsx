
import { StockChart } from "@/components/StockChart";
import { BarChart } from "@/components/BarChart";
import { MarketSentimentWidget } from "@/components/MarketSentimentWidget";
import { RiskAssessmentWidget } from "@/components/RiskAssessmentWidget";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, LineChart as LineChartIcon, BarChartIcon } from "lucide-react";

// Mock portfolio data
const portfolioStats = [
  {
    title: "Total Value",
    value: "$128,459.32",
    change: "+$2,405.12",
    percentage: "+1.9%",
    trend: "up"
  },
  {
    title: "Today's Change",
    value: "$1,294.05",
    percentage: "+1.1%",
    trend: "up"
  },
  {
    title: "Market Cap",
    value: "$982.4B",
    change: "-$14.2B",
    percentage: "-1.4%",
    trend: "down"
  },
  {
    title: "Total Return",
    value: "$42,581.76",
    percentage: "+15.2%",
    trend: "up"
  }
];

const Dashboard = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm font-medium">Just now</span>
        </div>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioStats.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className={`flex items-center rounded-full px-2 py-1 text-xs ${
                  stat.trend === "up" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                }`}>
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.percentage}
                </div>
              </div>
              {stat.change && (
                <p className={`text-sm mt-1 ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.change}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts column (takes 2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Line chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>S&P 500 Index Performance</CardTitle>
              <CardDescription>Line chart showing historical performance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <StockChart symbol="SPY" title="S&P 500 Index" />
            </CardContent>
          </Card>
          
          {/* Bar chart below line chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Market Performance by Sector</CardTitle>
              <CardDescription>Bar chart showing sector performance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <BarChart />
            </CardContent>
          </Card>
        </div>
        
        {/* Right column widgets */}
        <div className="space-y-6">
          <MarketSentimentWidget />
          <RiskAssessmentWidget />
        </div>
      </div>
      
      {/* Recent activity */}
      <div>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest portfolio updates and market events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Activity items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4 p-2 hover:bg-white/5 rounded-md transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      AI alert: NVDA showing strong buy signals based on recent earnings
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
