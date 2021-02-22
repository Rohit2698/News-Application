import { Text } from "native-base";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 1000);
  }, []);

  return (
    <LinearGradient
      colors={["white", "red"]}
      style={styles.linearGradient}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.1, y: 1.0 }}
    >
      <Image
        source={require("../../Images/logo.png")}
        // style={{ marginLeft: SCREEN_WIDTH / 5, marginTop: SCREEN_HEIGHT / 4 }}
      />
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 400,
  },
});

export default SplashScreen;
