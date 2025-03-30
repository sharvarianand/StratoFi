
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { AIChatbot } from "@/components/AIChatbot";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import MarketTrends from "./pages/MarketTrends";
import AIPredictions from "./pages/AIPredictions";
import Reports from "./pages/Reports";
import Portfolio from "./pages/Portfolio";
import RiskManagement from "./pages/RiskManagement";
import Pricing from "./pages/Pricing";
import Settings from "./pages/Settings";
import Features from "./pages/Features";
import AboutContact from "./pages/AboutContact";

const queryClient = new QueryClient();

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 bg-background">
            {children}
          </main>
        </div>
      </SidebarInset>
      <AIChatbot />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
              <Route path="/market-trends" element={<DashboardLayout><MarketTrends /></DashboardLayout>} />
              <Route path="/ai-predictions" element={<DashboardLayout><AIPredictions /></DashboardLayout>} />
              <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
              <Route path="/portfolio" element={<DashboardLayout><Portfolio /></DashboardLayout>} />
              <Route path="/risk" element={<DashboardLayout><RiskManagement /></DashboardLayout>} />
              <Route path="/pricing" element={<DashboardLayout><Pricing /></DashboardLayout>} />
              <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
              <Route path="/features" element={<DashboardLayout><Features /></DashboardLayout>} />
              <Route path="/about-contact" element={<DashboardLayout><AboutContact /></DashboardLayout>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
