import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView } from "react-native";
import { View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const EntertainmentPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [entertainment, setEntertainment] = useState([]);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "entertainment"))
      .then((response) => {
        setEntertainment(response.data.articles);
      })
      .then(() => fetchUsaNews());
  }, []);

  const fetchUsaNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("us", "entertainment"))
      .then((response) =>
        setEntertainment((prev) => [...prev, ...response.data.articles])
      )
      .then(() => fetchArNews());
  };

  const fetchArNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("ar", "entertainment"))
      .then((response) =>
        setEntertainment((prev) => [...prev, ...response.data.articles])
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
        {entertainment.map((item) => (
          <Cards news={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EntertainmentPage;
