import React from "react";

import { ScrollView, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return;

  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;

          return (
            <Spacer key={key} position={"left"} size={"medium"}>
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
