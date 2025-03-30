
import { HeroSection } from "@/components/HeroSection";
import { AIChatbot } from "@/components/AIChatbot";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="w-full h-16 px-4 md:px-8 flex items-center justify-between fixed top-0 z-30 glass">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">SF</span>
          </div>
          <span className="font-bold text-xl text-foreground">StratoFi</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/about-contact">About</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSelector />
          
          <Toggle
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className="relative p-2 rounded-md data-[state=on]:bg-primary/20 data-[state=off]:bg-primary/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-foreground" />
            )}
          </Toggle>
          
          <div className="hidden sm:flex gap-3">
            <Link to="/dashboard">
              <Button variant="outline" className="glass-input text-foreground">
                Log in
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="btn-gradient text-white">
                Get Started
              </Button>
            </Link>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 p-4 glass z-20 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-3">
            <NavLink href="/features" onClick={() => setIsMenuOpen(false)}>Features</NavLink>
            <NavLink href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
            <NavLink href="/about-contact" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <div className="pt-2 flex gap-2">
              <Link to="/dashboard" className="w-full">
                <Button variant="outline" className="w-full glass-input text-foreground">
                  Log in
                </Button>
              </Link>
              <Link to="/dashboard" className="w-full">
                <Button className="w-full btn-gradient text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <main>
        <HeroSection />
        
        {/* Additional sections could be added here */}
      </main>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

// Helper component for navigation links
const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <a
      href={href}
      className="text-foreground/80 hover:text-foreground transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Index;
