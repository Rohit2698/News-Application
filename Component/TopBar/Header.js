import { Text } from "native-base";

import React from "react";
import { View } from "react-native";

export const Header = ({ navigation, title }) => {
  return (
    <View
      style={{
        width: "100%",
        height:"100",
        backgroundColor: "red",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};
