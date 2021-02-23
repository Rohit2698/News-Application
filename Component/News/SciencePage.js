import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Spinner, View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const SciencePage = ({ navigation }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [science, setScience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    axios
      .get(newsByCategoryAndCountryApi("in", "science"))
      .then((response) => {
        setScience(response.data.articles);
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
          {science.map((item, index) => (
            <TouchableOpacity
              key={`${index}${science.length}`}
              onPress={() => navigation.navigate("NewsDetail", { news: item })}
            >
              <View key={`${index}${science.length}`}>
                <Cards news={item} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SciencePage;
