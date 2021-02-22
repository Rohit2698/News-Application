import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView } from "react-native";
import { View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const TechnologyPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [technology, setTechnology] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "technology"))
      .then((response) => {
        setTechnology(response.data.articles);
      })
      .then(() => fetchUsaNews());
  }, []);

  const fetchUsaNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("us", "technology"))
      .then((response) =>
        setTechnology((prev) => [...prev, ...response.data.articles])
      )
      .then(() => fetchArNews());
  };

  const fetchArNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("ar", "technology"))
      .then((response) =>
        setTechnology((prev) => [...prev, ...response.data.articles])
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
        {technology.map((item) => (
          <Cards news={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TechnologyPage;
