import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import Initiatives from "./components/Initiatives";

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
        <Initiatives />
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

