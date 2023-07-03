import { View, Text } from "react-native";
import React from "react";

const MapCallout = ({ restaurant }) => {
  return (
    <View>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

export default MapCallout;
