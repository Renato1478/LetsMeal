import React from "react";

import { CompactRestaurantMapInfo } from "../../../components/restaurant/compact-restaurant-map-info";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantMapInfo restaurant={restaurant} />;
};

export default MapCallout;
