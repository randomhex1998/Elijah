import React, { createContext, useEffect, useState } from "react";
import getAPI from "../api/api";

export const CartFeauContext = createContext();

function FeauContext({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Error state added

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getAPI();
        setData(apiData);
      } catch (error) {
        setError(error); // Set error state in case of API request failure
      }
    };

    fetchData();
    console.log(data)
  }, []);

  return (
    <CartFeauContext.Provider value={{ data, error }}>
      {children}
    </CartFeauContext.Provider>
  );
}

export default FeauContext;
