import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

interface FullScreenLayoutProps {
  children: React.ReactNode;
}

export function FullScreenLayout({ children }: FullScreenLayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full">
      {/* Navigation */}
      <nav className="w-full h-16 px-4 md:px-8 flex items-center justify-between fixed top-0 z-30 glass">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">SF</span>
            </div>
          </Link>
          <Link to="/" className="font-bold text-xl text-foreground">
            StratoFi
          </Link>
        </div>
        
        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about-contact">About</NavLink>
          </div>
        </div>
        
        {/* Right Side Actions */}
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

          {/* Login Button */}
          <Link to="/login" className="hidden md:block">
            <Button 
              className="bg-purple-700 hover:bg-purple-800 text-white border-none px-6"
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 w-full">
        <div className="w-full max-w-[2000px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

// Helper component for navigation links
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className="text-foreground/80 hover:text-foreground transition-colors font-medium"
    >
      {children}
    </Link>
  );
}; 