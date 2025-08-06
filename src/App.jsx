import React, { useState } from "react";
import Loader from "./components/loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        //ADD YOUR COMPONENTS HERE
        <div></div>
      )}
    </div>
  );
};

export default App;
