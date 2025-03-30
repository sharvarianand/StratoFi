
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  LineChart,
  Bot,
  FileText,
  Briefcase,
  AlertTriangle,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  Contact
} from "lucide-react";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// Navigation items for sidebar
const navItems = [
  { title: "Home", path: "/dashboard", icon: Home },
  { title: "Market Trends", path: "/market-trends", icon: LineChart },
  { title: "AI Predictions", path: "/ai-predictions", icon: Bot },
  { title: "Reports", path: "/reports", icon: FileText },
  { title: "User Portfolio", path: "/portfolio", icon: Briefcase },
  { title: "Risk Management", path: "/risk", icon: AlertTriangle },
  { title: "Pricing & Subscription", path: "/pricing", icon: CreditCard },
  { title: "About", path: "/about-contact", icon: Contact },
  { title: "Settings", path: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { isMobile, setOpenMobile, openMobile } = useSidebar();
  const location = useLocation();
  
  // Close mobile sidebar when route changes
  useEffect(() => {
    if (isMobile && openMobile) {
      setOpenMobile(false);
    }
  }, [location.pathname, isMobile, openMobile, setOpenMobile]);
  
  return (
    <>
      {/* Mobile menu toggle button */}
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setOpenMobile(true)}
        >
          <Menu size={24} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      )}
      
      <Sidebar side="left">
        <div className="flex items-center justify-between p-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">SF</span>
              </div>
              <span className="font-bold text-lg">StratoFi</span>
            </div>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full hover:bg-secondary transition-colors ml-auto"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
        
        <SidebarContent>
          <SidebarGroup>
            {!collapsed && <SidebarGroupLabel>Navigation</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      isActive={location.pathname === item.path}
                      tooltip={collapsed ? item.title : undefined}
                    >
                      <Link to={item.path} className="flex items-center gap-2">
                        <item.icon size={collapsed ? 20 : 16} />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        {!collapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="glass p-4 rounded-lg">
              <p className="text-xs text-muted-foreground">Need help?</p>
              <p className="text-sm font-medium mb-2">Ask our AI assistant</p>
              <button className="w-full btn-gradient text-white py-2 rounded-md text-sm">
                Open ChatBot
              </button>
            </div>
          </div>
        )}
      </Sidebar>
    </>
  );
}
