import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView } from "react-native";
import { View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const SciencePage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [science, setScience] = useState([]);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "science"))
      .then((response) => {
        setScience(response.data.articles);
      })
      .then(() => fetchUsaNews());
  }, []);

  const fetchUsaNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("us", "science"))
      .then((response) =>
        setScience((prev) => [...prev, ...response.data.articles])
      )
      .then(() => fetchArNews());
  };

  const fetchArNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("ar", "science"))
      .then((response) =>
        setScience((prev) => [...prev, ...response.data.articles])
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
        {science.map((item) => (
          <Cards news={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default SciencePage;
