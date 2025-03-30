
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, LineChart, ShieldCheck, Zap, BarChart3, Globe, Clock, PieChart, Heart } from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms to provide deep market insights",
      features: [
        {
          title: "Predictive Analytics",
          description: "AI-driven market predictions based on historical patterns and real-time data",
          icon: <Bot className="h-6 w-6 text-primary" />,
          badge: "Premium"
        },
        {
          title: "Sentiment Analysis",
          description: "Track market sentiment from news, social media, and financial reports",
          icon: <LineChart className="h-6 w-6 text-primary" />,
          badge: "Premium"
        },
        {
          title: "Risk Assessment",
          description: "Advanced algorithms to evaluate and mitigate investment risks",
          icon: <ShieldCheck className="h-6 w-6 text-primary" />,
          badge: "Free"
        }
      ]
    },
    {
      title: "Real-Time Trading Tools",
      description: "Powerful tools for active traders and investors",
      features: [
        {
          title: "Live Market Data",
          description: "Real-time price updates and market movements for thousands of instruments",
          icon: <Zap className="h-6 w-6 text-primary" />,
          badge: "Free"
        },
        {
          title: "Technical Indicators",
          description: "Over 100+ technical indicators for advanced chart analysis",
          icon: <BarChart3 className="h-6 w-6 text-primary" />,
          badge: "Premium"
        },
        {
          title: "Global Market Coverage",
          description: "Access to stocks, ETFs, forex, and cryptocurrencies across global markets",
          icon: <Globe className="h-6 w-6 text-primary" />,
          badge: "Premium"
        }
      ]
    },
    {
      title: "Portfolio Management",
      description: "Smart tools to manage and optimize your investment portfolio",
      features: [
        {
          title: "Performance Tracking",
          description: "Track your portfolio performance with detailed analytics and benchmarks",
          icon: <Clock className="h-6 w-6 text-primary" />,
          badge: "Free"
        },
        {
          title: "Diversification Analysis",
          description: "AI-powered suggestions to optimize your portfolio allocation",
          icon: <PieChart className="h-6 w-6 text-primary" />,
          badge: "Premium"
        },
        {
          title: "Custom Watchlists",
          description: "Create and monitor personalized watchlists for your favorite assets",
          icon: <Heart className="h-6 w-6 text-primary" />,
          badge: "Free"
        }
      ]
    }
  ];

  return (
    <div className="flex-1 space-y-10 p-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Platform Features</h1>
        <p className="text-muted-foreground text-lg">
          Discover the powerful tools and capabilities that StratoFi offers to enhance your investment journey.
        </p>
      </div>

      {/* Feature Categories */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {featureCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.features.map((feature, featureIdx) => (
                <Card key={featureIdx} className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <Badge variant={feature.badge === "Premium" ? "default" : "outline"}>
                      {feature.badge}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center max-w-md mx-auto p-6 glass-card rounded-lg">
        <h3 className="text-xl font-bold mb-2">Ready to experience these features?</h3>
        <p className="text-muted-foreground mb-4">Sign up now and start your journey to smarter investments.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/dashboard" className="btn-gradient text-white py-2 px-4 rounded-md text-center">
            Get Started
          </a>
          <a href="/pricing" className="bg-secondary text-foreground py-2 px-4 rounded-md text-center">
            View Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
