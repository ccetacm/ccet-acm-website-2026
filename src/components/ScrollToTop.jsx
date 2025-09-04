import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // fallback for older browsers
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        console.log("[ScrollDebug] Path:", location.pathname, "| Scroll applied");
    }, [location.pathname]);

    return null;
};

export default ScrollToTop;
