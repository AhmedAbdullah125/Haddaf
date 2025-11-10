import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Index from "../src/pages/Index";
import NotFound from "../src/pages/NotFound";
import ForgetPassword from "../src/pages/ForgetPassword";
import Verify from "../src/pages/Verify";
import ResetPassword from "../src/pages/ResetPassword";
import PlayGrounds from "../src/pages/PlayGrounds";
import GroundMatches from "../src/pages/GroundMatches";
import AddMatch from "../src/pages/AddMatch";
import AddPlayGround from "../src/pages/AddPlayGround";
import Reports from "../src/pages/Reports";
import ViewMatch from "../src/pages/ViewMatch";
import Notifications from "../src/pages/Notifications";
import Contact from "../src/pages/Contact";
import Settings from "../src/pages/Settings";
import About from "../src/pages/About";
import TermsAndConditions from "../src/pages/TermsAndConditions";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";
import PhoneUpdate from "../src/pages/PhoneUpdate";
import PhoneOTP from "../src/pages/PhoneOTP";
import PasswordUpdate from "../src/pages/PasswordUpdate";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playgrounds" element={<PlayGrounds />} />
          <Route path="/playground/edit/:id" element={<AddPlayGround />} />
          <Route path="/match/edit/:id" element={<AddMatch />} />
          <Route path="/match/add" element={<AddMatch />} />
          <Route path="/playground/matches/:id" element={<GroundMatches />} />
          <Route path="/playground/add" element={<AddPlayGround />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/match/view/:id" element={<ViewMatch />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/phone_opt" element={<PhoneOTP />} />
          <Route path="/phone_update" element={<PhoneUpdate />} />
          <Route path="/password_update" element={<PasswordUpdate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
