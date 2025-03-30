import { Button } from "@/components/ui/button";
import { Brain, Bot, Shield, Globe, Zap, Users, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI-Powered Market Analysis",
    description: "Harness the power of advanced AI algorithms to analyze market trends, predict movements, and identify lucrative opportunities in real-time.",
    icon: Brain,
    color: "text-blue-500",
    highlight: "Powered by cutting-edge AI technology"
  },
  {
    title: "Smart Trading Assistant",
    description: "Your personal AI trading companion that provides intelligent insights, trade recommendations, and portfolio optimization strategies.",
    icon: Bot,
    color: "text-purple-500",
    highlight: "24/7 intelligent trading support"
  },
  {
    title: "Advanced Risk Management",
    description: "Comprehensive risk assessment tools with AI-driven portfolio protection and automated risk mitigation strategies.",
    icon: Shield,
    color: "text-green-500",
    highlight: "Protect your investments"
  },
  {
    title: "Global Market Coverage",
    description: "Access real-time data and analysis from major global markets, including stocks, forex, crypto, and commodities.",
    icon: Globe,
    color: "text-orange-500",
    highlight: "Worldwide market access"
  },
  {
    title: "Real-time Smart Alerts",
    description: "Get instant, intelligent notifications for market movements, trading opportunities, and portfolio updates.",
    icon: Zap,
    color: "text-yellow-500",
    highlight: "Never miss an opportunity"
  },
  {
    title: "Community Intelligence",
    description: "Connect with expert traders, share insights, and leverage collective market knowledge for better trading decisions.",
    icon: Users,
    color: "text-pink-500",
    highlight: "Learn from the community"
  }
];

export default function Features() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Revolutionary Trading Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#D946EF]">
            Powerful Features for Modern Traders
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Discover how our advanced tools and AI capabilities can revolutionize your trading strategy
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full -mt-8 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg bg-primary/10 ${feature.color}`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2.5">{feature.description}</p>
                    <span className="text-xs font-medium text-primary/80">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-t from-background via-background/95 to-background/90 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Join the Future of Trading</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Trading Game?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful traders who are already leveraging StratoFi's 
            AI-powered platform to make smarter, more profitable trading decisions.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-5 text-base">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
