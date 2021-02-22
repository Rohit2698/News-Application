import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Component/SplashScreen/SplashScreen";
import HomePage from "./Component/HomePage/HomePage";
import { View } from "native-base";
import { Header } from "./Component/TopBar/Header";

const Stack = createStackNavigator();
const HeaderOptions = {
  headerStyle: {
    backgroundColor: "#6000D2",
    borderColor: "#6000D2",
    borderEndWidth: 0,
    borderWidth: 0,
  },
  headerTitleStyle: {
    color: "white",
    alignSelf: "center",
    borderBottomWidth: 0,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"SplashScreen"}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ ...HeaderOptions, title: "Welcome" }}
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
