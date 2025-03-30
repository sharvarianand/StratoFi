
import { useState } from "react";
import { Bell, Moon, Search, Sun, User } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { LanguageSelector } from "@/components/LanguageSelector";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <nav className="w-full h-16 glass flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4 md:hidden">
        <h2 className="font-bold text-xl text-foreground">StratoFi</h2>
      </div>
      
      <div className="relative hidden md:flex w-full max-w-lg">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          placeholder="Search stocks, assets, markets..."
          className="glass-input w-full py-2 pl-10 pr-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
        
        <Button variant="ghost" size="icon" className="relative text-foreground">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-foreground">
          <User size={18} />
        </Button>
      </div>
    </nav>
  );
}
