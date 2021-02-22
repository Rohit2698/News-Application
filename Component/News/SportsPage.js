import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView } from "react-native";
import { Text, View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const SportsPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "sports"))
      .then((response) => {
        setSports(response.data.articles);
      })
      .then(() => fetchUsaNews());
  }, []);

  const fetchUsaNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("us", "sports"))
      .then((response) =>
        setSports((prev) => [...prev, ...response.data.articles])
      )
      .then(() => fetchArNews());
  };

  const fetchArNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("ar", "sports"))
      .then((response) =>
        setSports((prev) => [...prev, ...response.data.articles])
      );
  };

  return (
    <View
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        flex: 1,
        zIndex: 9999,
        height: SCREEN_HEIGHT,
      }}
    >
      <ScrollView>
        {sports.map((item, index) => (
          <View key={`${index}${sports.length}`}>
            <Cards news={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SportsPage;
