import React, { useContext, useEffect, useState } from "react";

import MapView from "react-native-maps";

import styled from "styled-components";

import Search from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const soutwestLat = viewport.southwest.lat;

    const newLatDelta = northeastLat - soutwestLat;
    setLatDelta(newLatDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        // coordinates
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.04,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
          // return <MapView.Marker coordinate />;
        })}
      </Map>
    </>
  );
};
