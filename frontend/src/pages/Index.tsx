import { HeroSection } from "@/components/HeroSection";
import { AIChatbot } from "@/components/AIChatbot";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Moon, Sun, Search, Bell, UserCircle, Settings, LogOut } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AuthModal } from "@/components/AuthModal";

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="w-full h-16 px-4 md:px-8 flex items-center justify-between fixed top-0 z-30 glass bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="font-bold text-primary-foreground">SF</span>
          </div>
          <span className="font-bold text-xl text-foreground">StratoFi</span>
        </div>
        
        {/* Center Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
        </div>
        
        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden lg:flex w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="search"
              placeholder="Search stocks, markets..."
              className="w-full py-2 pl-10 pr-4 rounded-full text-sm border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Bell Icon */}
          <Button variant="ghost" size="icon" className="relative text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Button>

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

          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleAuthClick}
          >
            Login
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-9 w-9 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center"
              >
                <Avatar className="h-8 w-8 border-2 border-primary">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <UserCircle className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-20 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center gap-4 p-4">
            <NavLink href="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
            <NavLink href="/features" onClick={() => setIsMenuOpen(false)}>Features</NavLink>
            <NavLink href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
            <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          </div>
        </div>
      )}

      <main>
        <HeroSection />
        <AIChatbot />
      </main>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
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
    <Link
      to={href}
      className="text-foreground/80 hover:text-foreground transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Index;
