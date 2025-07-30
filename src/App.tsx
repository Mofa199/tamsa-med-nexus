import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Medical from "./pages/Medical";
import Pharmacology from "./pages/Pharmacology";
import DrugDetails from "./pages/DrugDetails";
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
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/student" element={<ProtectedRoute><StudentPortal /></ProtectedRoute>} />
            <Route path="/student/:studentType" element={<ProtectedRoute><StudentModules /></ProtectedRoute>} />
            <Route path="/student/:studentType/:moduleId" element={<ProtectedRoute><ModuleTopics /></ProtectedRoute>} />
            <Route path="/student/:studentType/:moduleId/:topicId" element={<ProtectedRoute><TopicContent /></ProtectedRoute>} />
            <Route path="/medical" element={<ProtectedRoute><Medical /></ProtectedRoute>} />
            <Route path="/pharmacology" element={<ProtectedRoute><Pharmacology /></ProtectedRoute>} />
            <Route path="/pharmacology/:drugId" element={<ProtectedRoute><DrugDetails /></ProtectedRoute>} />
            <Route path="/calculators" element={<ProtectedRoute><Calculators /></ProtectedRoute>} />
            <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
