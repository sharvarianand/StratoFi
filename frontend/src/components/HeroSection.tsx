import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { AuthModal } from "@/components/AuthModal";

export function HeroSection() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent dark:from-primary/10 dark:to-transparent z-0" />
      
      {/* Animated grid lines (for futuristic effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-fade-in">
              <span className="text-gradient">AI-Powered Precision</span>
              <br /> for Smarter Investments
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-[700px] animate-fade-in">
              StratoFi combines cutting-edge artificial intelligence with deep financial expertise
              to deliver market insights, predictions, and portfolio recommendations with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in">
              <Button 
                className="btn-gradient text-white h-12 px-8 rounded-lg text-lg" 
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-8 rounded-lg text-lg glass-input"
                onClick={() => navigate("/pricing")}
              >
                Get Premium Insights
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-8 animate-fade-in">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient">93%</div>
                <p className="text-sm text-foreground/80">Prediction Accuracy</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient">10K+</div>
                <p className="text-sm text-foreground/80">Active Users</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-gradient">24/7</div>
                <p className="text-sm text-foreground/80">Market Monitoring</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-400/30 rounded-3xl -rotate-2 transform-gpu"></div>
            <div className="relative h-full rounded-2xl overflow-hidden glass-card border border-white/20 shadow-xl">
              <img
                src="/hero-image.png"
                alt="StratoFi Platform"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Market Analysis</p>
                    <h3 className="text-xl font-bold text-white">Real-time AI Predictions</h3>
                  </div>
                  <Button variant="ghost" className="rounded-full bg-white/10 hover:bg-white/20">
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
}
