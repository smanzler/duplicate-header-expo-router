import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerBackground: () => (
            <View style={{ backgroundColor: "blue", height: 100 }} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
