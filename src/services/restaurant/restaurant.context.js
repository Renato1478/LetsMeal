import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      restaurantsRequest()
        .then((response) => {
          setRestaurants(restaurantsTransform(response));
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      //   value={useMemo(() => ({ restaurants, isLoading, error }), [])}
      value={{ restaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
