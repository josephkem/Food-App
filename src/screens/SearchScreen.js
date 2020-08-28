import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term is submitted")}
      />
      <Text>Screen Search</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
