import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowNavbar({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (location.pathname === "/login") {
      setShowNavbar(false);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default ShowNavbar;
