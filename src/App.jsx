import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import Initiatives from "./components/Initiatives";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import MagazineScroller from "./components/MagazineScroller";
import Header_Hero_SocialMedia from "./components/Header_Hero_SocialMedia.jsx"; // Import your home component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header_Hero_SocialMedia />
          <Initiatives />
        </div>
      )}
    </div>
  );
};

export default App;

// import React from "react";
// import Initiatives from "./components/Initiatives";

// const App=()=>{
//   return(
// <div>
// <Initiatives />
// </div>
//   )
// }
// export default App;
