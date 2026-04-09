import { Switch, Route, Router as WouterRouter } from "wouter";
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
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={JigjigaCityPortal} />
      <Route path="/history-culture" component={HistoryAndCulture} />
      <Route path="/history-culture/sayid-hassan" component={SayidHassan} />
      <Route path="/history-culture/garad-wiil-waal" component={GaradWiilWaal} />
      <Route path="/history-culture/xeer-system" component={XeerSystem} />
      <Route path="/history-culture/traditional-leadership" component={TraditionalLeadership} />
      <Route path="/history-culture/dhaanto" component={Dhaanto} />
      <Route component={NotFound} />
    </Switch>
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
