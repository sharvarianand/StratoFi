
import { useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // In a real app, you would implement language switching logic here
    console.log(`Language changed to ${langCode}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Globe size={18} />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={
              currentLanguage === lang.code
                ? "bg-accent text-accent-foreground"
                : ""
            }
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
