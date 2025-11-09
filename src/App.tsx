import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MemberProvider } from "@/contexts/MemberContext";
import Login from "../src/pages/Login";
import Index from "../src/pages/Index";
import NotFound from "../src/pages/NotFound";
import ForgetPassword from "../src/pages/ForgetPassword";
import Verify from "../src/pages/Verify";
import ResetPassword from "../src/pages/ResetPassword";
import PlayGrounds from "../src/pages/PlayGrounds";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MemberProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playgrounds" element={<PlayGrounds />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </MemberProvider>
</QueryClientProvider>
);

export default App;
