import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Medical from "./pages/Medical";
import Pharmacology from "./pages/Pharmacology";
import Books from "./pages/Books";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentPortal from "./pages/StudentPortal";
import StudentModules from "./pages/StudentModules";
import ModuleTopics from "./pages/ModuleTopics";
import TopicContent from "./pages/TopicContent";
import Calculators from "./pages/Calculators";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portal" element={<StudentPortal />} />
          <Route path="/student/:studentType" element={<StudentModules />} />
          <Route path="/student/:studentType/:moduleId" element={<ModuleTopics />} />
          <Route path="/student/:studentType/:moduleId/:topicId" element={<TopicContent />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/pharmacology" element={<Pharmacology />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
