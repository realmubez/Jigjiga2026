import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
        <Route path="/" component={JigjigaCityPortal} />
        <Route path="/history-culture" component={HistoryAndCulture} />
        <Route path="/history-culture/sayid-hassan" component={SayidHassan} />
        <Route path="/history-culture/garad-wiil-waal" component={GaradWiilWaal} />
        <Route path="/history-culture/xeer-system" component={XeerSystem} />
        <Route path="/history-culture/traditional-leadership" component={TraditionalLeadership} />
        <Route path="/history-culture/dhaanto" component={Dhaanto} />
        <Route path="/history-culture/somali-aqal" component={SomaliAqal} />
        <Route path="/eat-drink" component={EatAndDrink} />
        <Route path="/eat-drink/bariis-mindi" component={BaarisMindi} />
        <Route path="/eat-drink/anjero-injera" component={AnjeroInjera} />
        <Route path="/eat-drink/camel-meat-milk" component={CamelMeatMilk} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
