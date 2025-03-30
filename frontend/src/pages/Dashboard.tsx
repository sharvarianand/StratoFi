import { StockChart } from "@/components/StockChart";
import { BarChart } from "@/components/BarChart";
import { MarketSentimentWidget } from "@/components/MarketSentimentWidget";
import { RiskAssessmentWidget } from "@/components/RiskAssessmentWidget";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, LineChart as LineChartIcon, BarChartIcon, Sparkles } from "lucide-react";

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
    <div className="flex-1 space-y-6 p-6 bg-gradient-to-b from-background to-background/80">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-2">
            <Sparkles className="h-3 w-3" />
            <span className="text-xs font-medium">Live Updates</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#D946EF]">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm font-medium text-primary">Just now</span>
        </div>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioStats.map((stat, index) => (
          <Card key={index} className="glass-card border-0 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground/80">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</h3>
                </div>
                <div className={`flex items-center rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
                  stat.trend === "up" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
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
                <p className={`text-sm mt-2 font-medium ${
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
          <Card className="glass-card border-0 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">S&P 500 Index Performance</CardTitle>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  <LineChartIcon className="h-3 w-3" />
                  <span>Live Chart</span>
                </div>
              </div>
              <CardDescription className="text-muted-foreground/80">Line chart showing historical performance</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <StockChart symbol="SPY" title="S&P 500 Index" />
            </CardContent>
          </Card>
          
          {/* Bar chart below line chart */}
          <Card className="glass-card border-0 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300">
            <CardHeader className="space-y-1 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Market Performance by Sector</CardTitle>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs">
                  <BarChartIcon className="h-3 w-3" />
                  <span>Sector Analysis</span>
                </div>
              </div>
              <CardDescription className="text-muted-foreground/80">Bar chart showing sector performance</CardDescription>
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
        <Card className="glass-card border-0 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-300">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground/80">Your latest portfolio updates and market events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Activity items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4 p-3 hover:bg-primary/5 rounded-lg transition-colors group">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      AI alert: NVDA showing strong buy signals based on recent earnings
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">2 hours ago</p>
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
