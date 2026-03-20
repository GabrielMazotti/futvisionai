import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Telegram = lazy(() => import("./pages/Telegram"));
const Verificacao = lazy(() => import("./pages/Verificacao"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/telegram" element={<Suspense fallback={null}><Telegram /></Suspense>} />
      <Route path="/verificacao" element={<Suspense fallback={null}><Verificacao /></Suspense>} />
      <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
    </Routes>
  </BrowserRouter>
);

export default App;
