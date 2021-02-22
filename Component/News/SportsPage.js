import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import { Dimensions, ScrollView, AsyncStorage } from "react-native";
import { Text, View } from "native-base";
import axios from "axios";
import { newsByCategoryAndCountryApi } from "../../Constants/ApiConstants";

const SportsPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [sports, setSports] = useState([]);
  const [val, setVal] = useState("");

  const storeSports = () => {
    AsyncStorage.setItem("sports", "hello");
  };

  const _storeData = async (data) => {
    try {
      await AsyncStorage.setItem("SportsNews", JSON.stringify(sports));
    } catch (error) {
      // Error saving data
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("SportsNews");
      alert("retrieve");
      if (value !== null) {
        // We have data!!

        console.log(value);
        setVal(value);
        setSports(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const retrieveData = () => {
    const value = AsyncStorage.getItem("sports");
    if (value !== null) {
      alert(value);
      console.log(value);
      setSports(value);
    }
  };

  useEffect(() => {
    // _retrieveData();
    axios
      .get(newsByCategoryAndCountryApi("in", "sports"))
      .then((response) => {
        alert("news");
        // setTimeout(() => {
          const x = [...sports, ...response.data.articles];
          _storeData(x);
          setSports(response.data.articles);
        // }, 500);
        // _retrieveData();
        // fetchUsaNews();
      })
      .catch(() => {
        _retrieveData();
      });
  }, []);

  const fetchUsaNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("us", "sports"))
      .then((response) => {
        setTimeout(() => {
          const x = [...sports, ...response.data.articles];
          _storeData(x);
          setSports((prev) => [...prev, ...response.data.articles]);
        }, 500);
      })
      .catch(() => {
        _retrieveData();
      });
  };

  const fetchArNews = () => {
    axios
      .get(newsByCategoryAndCountryApi("ar", "sports"))
      .then((response) =>
        setSports((prev) => [...prev, ...response.data.articles])
      )
      .then(() => _storeData())
      .catch(() => {
        _retrieveData();
      });
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
      {/* <Text>Data{val}</Text> */}
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
