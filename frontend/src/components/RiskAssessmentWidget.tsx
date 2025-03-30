
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export function RiskAssessmentWidget() {
  // Mock risk data
  const riskScore = 65; // Out of 100
  const riskLevel = riskScore > 70 ? "High" : riskScore > 40 ? "Moderate" : "Low";
  
  const getRiskColor = () => {
    if (riskScore > 70) return "text-red-500";
    if (riskScore > 40) return "text-yellow-500";
    return "text-green-500";
  };
  
  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <CardTitle>Risk Assessment</CardTitle>
        </div>
        <CardDescription>AI analysis of your portfolio risk</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-muted-foreground">Risk Level:</span>
            <div className={`text-xl font-bold ${getRiskColor()}`}>{riskLevel}</div>
          </div>
          <div className="text-right">
            <span className="text-sm text-muted-foreground">Risk Score:</span>
            <div className="text-xl font-bold">{riskScore}/100</div>
          </div>
        </div>
        
        {/* Risk gauge visualization */}
        <div className="relative h-4 bg-secondary rounded-full overflow-hidden mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
            style={{ width: "100%" }} 
          />
          <div 
            className="absolute top-0 left-0 h-full w-1 bg-white"
            style={{ left: `${riskScore}%`, transform: "translateX(-50%)" }} 
          />
        </div>
        
        <div className="grid grid-cols-3 text-center text-xs mb-6">
          <div className="text-green-500 font-medium">Low</div>
          <div className="text-yellow-500 font-medium">Moderate</div>
          <div className="text-red-500 font-medium">High</div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5" />
            <p>Your portfolio has moderate exposure to market volatility.</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5" />
            <p>Tech sector allocation (42%) exceeds recommended threshold (30%).</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5" />
            <p>Low diversification across asset classes increases risk.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
