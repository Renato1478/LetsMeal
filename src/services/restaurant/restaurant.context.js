import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

import { LocationContext } from "../../services/location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setError(null);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
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
    if (!location) {
      setRestaurants([]);
      return;
    }

    const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(locationString);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      //   value={useMemo(() => ({ restaurants, isLoading, error }), [])}
      value={{ restaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
