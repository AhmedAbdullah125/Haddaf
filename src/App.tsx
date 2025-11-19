import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Verify from "@/pages/Verify";
import PlayGrounds from "@/pages/PlayGrounds";
import GroundMatches from "@/pages/GroundMatches";
import GroundMatchesDetails from "@/pages/GroundMatchesDetails";
import AddMatch from "@/pages/AddMatch";
import AddPlayGround from "@/pages/AddPlayGround";
import Reports from "@/pages/Reports";
import ViewMatch from "@/pages/ViewMatch";
import Notifications from "@/pages/Notifications";
import Contact from "@/pages/Contact";
import Settings from "@/pages/Settings";
import PasswordUpdate from "@/pages/PasswordUpdate";
import About from "@/pages/About";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PhoneUpdateWrapper from "@/pages/PhoneUpdateWrapper";
import PhoneOTP from "@/pages/PhoneOTP";
import Profile from "@/pages/Profile";
import LoginWrapper from "@/pages/LoginWrapper";
import Login from "@/pages/Login";
import EditPlayGround from "@/pages/EditPlayGround";
import EditMatch from "@/pages/EditMatch";
const queryClient = new QueryClient();
import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuthed = () =>
  typeof window !== "undefined" && !!localStorage.getItem("token");

function RequireAuth() {
  const location = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}

// Optional: prevent logged-in users from seeing auth pages
function GuestOnly() {
  if (isAuthed()) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-left" />
      <BrowserRouter basename="/">
        <Routes>
          {/* Public (no token required) */}
          <Route element={<GuestOnly />}>
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forget-password" element={<LoginWrapper />} />
            {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
          </Route>
          {/* Everything else is protected */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Index />} />
            <Route path="/playgrounds" element={<PlayGrounds />} />
            <Route path="/playground/edit/:id" element={<EditPlayGround />} />
            <Route path="/match/edit/:id" element={<EditMatch />} />
            <Route path="/match/add/:id" element={<AddMatch />} />
            <Route path="/playground/matches/:id" element={<GroundMatches />} />
            <Route path="/playground/matches_details/:id" element={<GroundMatchesDetails />} />
            <Route path="/playground/add" element={<AddPlayGround />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/match/view/:id" element={<ViewMatch />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/phone_otp" element={<PhoneOTP />} />
            <Route path="/phone_update" element={<PhoneUpdateWrapper />} />
            <Route path="/password_update" element={<PasswordUpdate />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
