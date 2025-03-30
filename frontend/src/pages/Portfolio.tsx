
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ArrowUp, ArrowDown } from "lucide-react";

// Mock data
const portfolioValue = [
  { month: "Jan", value: 100000 },
  { month: "Feb", value: 105000 },
  { month: "Mar", value: 103000 },
  { month: "Apr", value: 110000 },
  { month: "May", value: 115000 },
  { month: "Jun", value: 112000 },
  { month: "Jul", value: 118000 },
  { month: "Aug", value: 125000 },
  { month: "Sep", value: 128000 },
];

const holdings = [
  { name: "AAPL", value: 32400, percentage: 25.3, change: +2.4 },
  { name: "MSFT", value: 25600, percentage: 20.0, change: +1.5 },
  { name: "GOOGL", value: 19200, percentage: 15.0, change: -0.8 },
  { name: "AMZN", value: 17920, percentage: 14.0, change: +3.2 },
  { name: "TSLA", value: 11520, percentage: 9.0, change: -1.2 },
  { name: "Others", value: 21360, percentage: 16.7, change: +0.5 },
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];

const Portfolio = () => {
  const totalPortfolioValue = 128000;
  const portfolioChange = 3200;
  const portfolioPercentChange = 2.56;

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Your Portfolio</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm font-medium">Just now</span>
        </div>
      </div>

      {/* Portfolio summary card */}
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm text-muted-foreground">Portfolio Value</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">${totalPortfolioValue.toLocaleString()}</span>
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  {portfolioPercentChange}%
                </span>
              </div>
              <p className="text-sm text-green-500">+${portfolioChange.toLocaleString()} today</p>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="performance">
                <TabsList className="mb-4">
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="allocation">Allocation</TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={portfolioValue}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>

                <TabsContent value="allocation" className="h-[200px]">
                  <div className="flex items-center justify-between h-full">
                    <div className="w-1/2 h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={holdings}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {holdings.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "rgba(0,0,0,0.8)",
                              border: "1px solid rgba(255,255,255,0.2)",
                              borderRadius: "8px",
                            }}
                            formatter={(value: number) => [`$${value.toLocaleString()}`, "Value"]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 space-y-2">
                      {holdings.map((stock, index) => (
                        <div key={stock.name} className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <span className="text-sm font-medium">{stock.name}</span>
                          </div>
                          <span className="text-sm">{stock.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Holdings table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
          <CardDescription>Your current portfolio assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-sm">Asset</th>
                  <th className="text-right p-3 text-sm">Value</th>
                  <th className="text-right p-3 text-sm">Allocation</th>
                  <th className="text-right p-3 text-sm">24h Change</th>
                  <th className="text-right p-3 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.name} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 font-medium">{holding.name}</td>
                    <td className="p-3 text-right">${holding.value.toLocaleString()}</td>
                    <td className="p-3 text-right">{holding.percentage}%</td>
                    <td className={`p-3 text-right ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </td>
                    <td className="p-3 text-right">
                      <button className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md hover:bg-primary/30 transition-colors">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Performance metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Return on Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">+28.4%</div>
            <p className="text-sm text-muted-foreground">Since inception</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Dividend Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2.7%</div>
            <p className="text-sm text-muted-foreground">Annual average</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-500">Moderate</div>
            <p className="text-sm text-muted-foreground">65/100</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
