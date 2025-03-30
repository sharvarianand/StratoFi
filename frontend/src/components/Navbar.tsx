import { useState } from "react";
import { Bell, Moon, Search, Sun, User, LogOut, Settings, UserCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <nav className="w-full h-16 glass flex items-center justify-between px-6 sticky top-0 z-30 bg-background">
      {/* Brand Logo & Name */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground">SF</span>
        </div>
        <h2 className="font-bold text-xl text-foreground">StratoFi</h2>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 mx-4">
        <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
          Dashboard
        </Link>
        <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
          Features
        </Link>
        <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
          Pricing
        </Link>
        <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
          About
        </Link>
      </div>

      {/* Right Side Items */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:flex w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="glass-input w-full py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Language Selector */}
        <LanguageSelector />
        
        {/* Theme Toggle */}
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
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Login
        </Button>
        
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative h-9 w-9 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center border border-primary"
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src="/path-to-profile-image.jpg" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <UserCircle className="h-6 w-6" />
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
              <User className="mr-2 h-4 w-4" />
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
      </div>
    </nav>
  );
}
