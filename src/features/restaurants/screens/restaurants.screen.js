// ** React Imports
import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

// ** React Native Paper
import { ActivityIndicator, Colors, Searchbar, Text } from "react-native-paper";

// ** Components
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

// ** Context
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
