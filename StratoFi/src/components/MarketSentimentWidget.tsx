
import { ArrowUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Simplified market sentiment data
const sentimentData = {
  bullish: 65,
  neutral: 20,
  bearish: 15,
  topMentions: [
    { symbol: "AAPL", change: "+2.4%", sentiment: "Bullish" },
    { symbol: "TSLA", change: "+1.8%", sentiment: "Bullish" },
    { symbol: "MSFT", change: "+0.9%", sentiment: "Neutral" }
  ]
};

export function MarketSentimentWidget() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Market Sentiment</CardTitle>
        <CardDescription>AI-powered social media analysis</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall sentiment */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Bullish</h4>
            <span className="text-sm font-medium text-green-500">{sentimentData.bullish}%</span>
          </div>
          <Progress value={sentimentData.bullish} className="h-2 bg-white/10" />
          
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Neutral</h4>
            <span className="text-sm font-medium text-blue-500">{sentimentData.neutral}%</span>
          </div>
          <Progress value={sentimentData.neutral} className="h-2 bg-white/10" />
          
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium">Bearish</h4>
            <span className="text-sm font-medium text-red-500">{sentimentData.bearish}%</span>
          </div>
          <Progress value={sentimentData.bearish} className="h-2 bg-white/10" />
        </div>
        
        {/* Top mentioned stocks */}
        <div>
          <h4 className="mb-3 text-sm font-medium">Top Mentions</h4>
          <div className="space-y-2">
            {sentimentData.topMentions.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-2 bg-white/5 dark:bg-black/20 rounded-md"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    item.sentiment === "Bullish" ? "bg-green-500" : 
                    item.sentiment === "Bearish" ? "bg-red-500" : "bg-blue-500"
                  }`} />
                  <span className="font-medium">{item.symbol}</span>
                </div>
                <div className="flex items-center gap-1 text-green-500 text-sm">
                  <ArrowUp className="h-3 w-3" />
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
