import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Search = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Search",
          headerSearchBarOptions: { placeholder: "Search" },
          headerStyle: { backgroundColor: "blue" },
          headerLargeTitle: true,
        }}
      />
      <Text>Search</Text>
    </View>
  );
};

export default Search;
