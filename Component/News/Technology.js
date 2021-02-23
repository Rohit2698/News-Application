import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Spinner, View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const TechnologyPage = ({ navigation }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [technology, setTechnology] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "technology"))
      .then((response) => {
        setTechnology(response.data.articles);
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
          {technology.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NewsDetail", { news: item })}
              key={`${index}${technology.length}`}
            >
              <View key={`${index}${technology.length}`}>
                <Cards news={item} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TechnologyPage;
