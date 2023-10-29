// ** React Imports
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// ** React Native Paper
import { ActivityIndicator, Colors } from "react-native-paper";

// ** Components
import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import Search from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

// ** Context
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const LoadingContainer = styled.View`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
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
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
