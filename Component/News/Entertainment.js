import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView } from "react-native";
import { Spinner, View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const EntertainmentPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [entertainment, setEntertainment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "entertainment"))
      .then((response) => {
        setEntertainment(response.data.articles);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setErrorLoading(true);
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
      {loading ? (
        <View
          style={{
            marginLeft: SCREEN_WIDTH / 2,
          }}
        >
          <Spinner />
        </View>
      ) : errorLoading ? (
        <Cards errorLoading={errorLoading} />
      ) : (
        <ScrollView>
          {entertainment.map((item, index) => (
            <View key={`${index}${entertainment.length}`}>
              <Cards news={item} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default EntertainmentPage;
