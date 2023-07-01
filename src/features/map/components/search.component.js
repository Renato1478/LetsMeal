import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  position: absolute;
  padding: ${(props) => props.theme.space[3]};
  top: 40px;
  z-index: 999;
  width: 100%;
`;

export default function Search() {
  // ** Hooks
  const { keyword, search } = useContext(LocationContext);

  // ** States
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location..."
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
}
