import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WellnessYoga from "./pages/WellnessYoga";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ReturnPolicy from "./components/ReturnPolicy";
import MudraHealing from "./pages/MudraHealing";
import AuraHealing from "./pages/AuraHealing";
import VirtualNatureHealing from "./pages/VirtualNatureHealing";
import SoundHealing from "./pages/SoundHealing";
import PlanandPricing from "./pages/Pricing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPostRoute from "./pages/BlogPostRoute";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import AdminRoutes from "./admin/AdminRoutes";
import AdminLogin from "./admin/pages/AdminLogin";
import UserRoutes from "./user/UserRoutes";
import EditorLayout from "./editor/layouts/EditorLayout";
import EditorDashboard from "./editor/pages/EditorDashboard";
import EditorPosts from "./editor/pages/Posts";
import EditorPages from "./editor/pages/Pages";
import EditorLogin from "./editor/pages/EditorLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wellness-yoga" element={<WellnessYoga />} />
          <Route path="/mudra-healing" element={<MudraHealing />} />
          <Route path="/aura-healing" element={<AuraHealing />} />
          <Route
            path="/virtual-nature-healing"
            element={<VirtualNatureHealing />}
          />
          <Route path="/sound-healing" element={<SoundHealing />} />
          <Route path="/plan-and-pricing" element={<PlanandPricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostRoute />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          {/*Admin Routes*/}
          {AdminRoutes}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Editor Routes */}
          {/* Editor Login */}
          <Route path="/editor/login" element={<EditorLogin />} />
          {/* Editor Panel */}
          <Route path="/editor" element={<EditorLayout />}>
            <Route index element={<EditorDashboard />} />
            <Route path="posts" element={<EditorPosts />} />
            <Route path="pages" element={<EditorPages />} />
          </Route>
          {/*User Routes*/}
          {UserRoutes}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
