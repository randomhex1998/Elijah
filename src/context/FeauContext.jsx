import React, { createContext, useEffect, useState } from "react";
import getAPI from "../api/api";

export const CartFeauContext = createContext();

function FeauContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = () => {
      setData(getAPI());
      console.log(data);
    };

    fetchApi();
  }, []);
  return (
    <CartFeauContext.Provider value={data}>{children}</CartFeauContext.Provider>
  );
}

export default FeauContext;
