import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { AIChatbot } from "@/components/AIChatbot";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import NotFound from "./pages/NotFound";
import MarketTrends from "./pages/MarketTrends";
import AIPredictions from "./pages/AIPredictions";
import Reports from "./pages/Reports";
import Portfolio from "./pages/Portfolio";
import RiskManagement from "./pages/RiskManagement";
import Pricing from "@/pages/Pricing";
import Settings from "./pages/Settings";
import Features from "@/pages/Features";
import About from "@/pages/About";
import { FullScreenLayout } from "@/components/layouts/FullScreenLayout";

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
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<FullScreenLayout><Dashboard /></FullScreenLayout>} />
              <Route path="/market-trends" element={<DashboardLayout><MarketTrends /></DashboardLayout>} />
              <Route path="/ai-predictions" element={<DashboardLayout><AIPredictions /></DashboardLayout>} />
              <Route path="/reports" element={<DashboardLayout><Reports /></DashboardLayout>} />
              <Route path="/portfolio" element={<DashboardLayout><Portfolio /></DashboardLayout>} />
              <Route path="/risk" element={<DashboardLayout><RiskManagement /></DashboardLayout>} />
              <Route path="/pricing" element={<FullScreenLayout><Pricing /></FullScreenLayout>} />
              <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
              <Route path="/features" element={<FullScreenLayout><Features /></FullScreenLayout>} />
              <Route path="/about-contact" element={<FullScreenLayout><About /></FullScreenLayout>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
