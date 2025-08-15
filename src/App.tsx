import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import SumuTownServiceCenter from "@/pages/SumuTownServiceCenter";
import GaqaCommunityServiceCenter from "@/pages/GaqaCommunityServiceCenter";
import ServiceStations from "@/pages/ServiceStations";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sumu-town-service-center" element={<SumuTownServiceCenter />} />
        <Route path="/gaqa-community-service-center" element={<GaqaCommunityServiceCenter />} />
        <Route path="/service-stations" element={<ServiceStations />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </AuthContext.Provider>
  );
}
