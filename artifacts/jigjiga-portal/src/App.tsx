import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import AdminProtectedRoute from "@/components/AdminProtectedRoute";

import JigjigaCityPortal from "./pages/JigjigaCityPortal";
import HistoryAndCulture from "./pages/HistoryAndCulture";
import SayidHassan from "./pages/SayidHassan";
import GaradWiilWaal from "./pages/GaradWiilWaal";
import XeerSystem from "./pages/XeerSystem";
import TraditionalLeadership from "./pages/TraditionalLeadership";
import Dhaanto from "./pages/Dhaanto";
import SomaliAqal from "./pages/SomaliAqal";
import EatAndDrink from "./pages/EatAndDrink";
import BaarisMindi from "./pages/BaarisMindi";
import AnjeroInjera from "./pages/AnjeroInjera";
import CamelMeatMilk from "./pages/CamelMeatMilk";
import Muqmad from "./pages/Muqmad";
import ShaahRinjiga from "./pages/ShaahRinjiga";
import JebenaBun from "./pages/JebenaBun";
import GardenCafes from "./pages/GardenCafes";
import StreetFood from "./pages/StreetFood";
import Landmarks from "./pages/Landmarks";
import CentralMosque from "./pages/CentralMosque";
import CamelMarket from "./pages/CamelMarket";
import KararaMountains from "./pages/KararaMountains";
import JigjigaUniversity from "./pages/JigjigaUniversity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminPostEditor from "./pages/admin/AdminPostEditor";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminContent from "./pages/admin/AdminContent";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Public pages */}
        <Route path="/" component={JigjigaCityPortal} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />

        {/* History & Culture */}
        <Route path="/history-culture" component={HistoryAndCulture} />
        <Route path="/history-culture/sayid-hassan" component={SayidHassan} />
        <Route path="/history-culture/garad-wiil-waal" component={GaradWiilWaal} />
        <Route path="/history-culture/xeer-system" component={XeerSystem} />
        <Route path="/history-culture/traditional-leadership" component={TraditionalLeadership} />
        <Route path="/history-culture/dhaanto" component={Dhaanto} />
        <Route path="/history-culture/somali-aqal" component={SomaliAqal} />

        {/* Eat & Drink */}
        <Route path="/eat-drink" component={EatAndDrink} />
        <Route path="/eat-drink/bariis-mindi" component={BaarisMindi} />
        <Route path="/eat-drink/anjero-injera" component={AnjeroInjera} />
        <Route path="/eat-drink/camel-meat-milk" component={CamelMeatMilk} />
        <Route path="/eat-drink/muqmad" component={Muqmad} />
        <Route path="/eat-drink/shaah-rinjiga" component={ShaahRinjiga} />
        <Route path="/eat-drink/jebena-bun" component={JebenaBun} />
        <Route path="/eat-drink/garden-cafes" component={GardenCafes} />
        <Route path="/eat-drink/street-food" component={StreetFood} />

        {/* Landmarks */}
        <Route path="/landmarks" component={Landmarks} />
        <Route path="/landmarks/central-mosque" component={CentralMosque} />
        <Route path="/landmarks/camel-market" component={CamelMarket} />
        <Route path="/landmarks/karamara-mountains" component={KararaMountains} />
        <Route path="/landmarks/jigjiga-university" component={JigjigaUniversity} />

        {/* Admin — login (public) */}
        <Route path="/admin/login" component={AdminLogin} />

        {/* Admin — protected routes */}
        <Route path="/admin">
          {() => (
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/content">
          {() => (
            <AdminProtectedRoute>
              <AdminContent />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/posts">
          {() => (
            <AdminProtectedRoute>
              <AdminPosts />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/posts/new">
          {() => (
            <AdminProtectedRoute>
              <AdminPostEditor />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/posts/edit/:id">
          {() => (
            <AdminProtectedRoute>
              <AdminPostEditor />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/users">
          {() => (
            <AdminProtectedRoute>
              <AdminUsers />
            </AdminProtectedRoute>
          )}
        </Route>
        <Route path="/admin/settings">
          {() => (
            <AdminProtectedRoute>
              <AdminSettings />
            </AdminProtectedRoute>
          )}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AdminAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
