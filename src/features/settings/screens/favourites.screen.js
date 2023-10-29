import React, { useContext } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import styled from "styled-components";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
  `;

  if (favourites.length) {
    return (
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    );
  } else {
    return (
      <NoFavouritesArea>
        <Text center>No favourites yet</Text>
      </NoFavouritesArea>
    );
  }
};
