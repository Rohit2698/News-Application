import axios from "axios";
import { Spinner, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { newsByCategoryApi } from "../../Constants/ApiConstants";
import CarouselItems from "../HomePage/CarouselItem";

const AllNewsPage = ({ navigation }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [sportsNews, setSportsNews] = useState();
  const [businessNews, setBusinessNews] = useState();
  const [entertainment, setEntertainment] = useState();
  const [technology, setTechnology] = useState();
  const [health, setHealth] = useState();
  const [science, setScience] = useState();
  const [loadingSports, setLoadingSports] = useState(true);
  const [loadingBusiness, setLoadingBusiness] = useState(true);
  const [loadingEntertainment, setLoadingEntertainment] = useState(true);
  const [loadingTechnology, setLoadingTechnology] = useState(true);
  const [loadingHealth, setLoadingHealth] = useState(true);
  const [loadingScience, setLoadingScience] = useState(true);
  const [errorSports, setErrorSports] = useState(false);
  const [errorBusiness, setErrorBusiness] = useState(false);
  const [errorEntertainment, setErrorEntertainment] = useState(false);
  const [errorTechnology, setErrorTechnology] = useState(false);
  const [errorHealth, setErrorHealth] = useState(false);
  const [errorScience, setErrorScience] = useState(false);

  useEffect(() => {
    axios
      .get(newsByCategoryApi("sports"))
      .then((response) => {
        setSportsNews(response.data.articles);
        setLoadingSports(false);
      })
      .catch(() => {
        setErrorSports(true);
      });

    axios
      .get(newsByCategoryApi("business"))
      .then((response) => {
        setBusinessNews(response.data.articles);
        setLoadingBusiness(false);
      })
      .catch(() => {
        setErrorBusiness(true);
      });

    axios
      .get(newsByCategoryApi("entertainment"))
      .then((response) => {
        setEntertainment(response.data.articles);
        setLoadingEntertainment(false);
      })
      .catch(() => {
        setErrorEntertainment(true);
      });

    axios
      .get(newsByCategoryApi("technology"))
      .then((response) => {
        setTechnology(response.data.articles);
        setLoadingTechnology(false);
      })
      .catch(() => {
        setErrorTechnology(true);
      });

    axios
      .get(newsByCategoryApi("health"))
      .then((response) => {
        setHealth(response.data.articles);
        setLoadingHealth(false);
      })
      .catch(() => {
        setErrorHealth(true);
      });

    axios
      .get(newsByCategoryApi("science"))
      .then((response) => {
        setScience(response.data.articles);
        setLoadingScience(false);
      })
      .catch(() => {
        setErrorScience(true);
      });
  }, []);

  return (
    <ScrollView
      style={{
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}
    >
      <View>
        <CarouselItems
          errorLoading={errorSports}
          loading={loadingSports}
          title={"Sports"}
          news={sportsNews}
          navigation={navigation}
        />
      </View>
      <View>
        <CarouselItems
          errorLoading={errorBusiness}
          loading={loadingBusiness}
          title={"Business"}
          news={businessNews}
          navigation={navigation}
        />
      </View>
      <View>
        <CarouselItems
          errorLoading={errorEntertainment}
          loading={loadingEntertainment}
          title={"Entertainment"}
          news={entertainment}
          navigation={navigation}
        />
      </View>
      <View>
        <CarouselItems
          errorLoading={errorTechnology}
          loading={loadingTechnology}
          title={"Technology"}
          news={technology}
          navigation={navigation}
        />
      </View>
      <View>
        <CarouselItems
          errorLoading={errorHealth}
          loading={loadingHealth}
          title={"Health"}
          news={health}
          navigation={navigation}
        />
      </View>
      <View style={{ marginBottom: 200 }}>
        <CarouselItems
          errorLoading={errorScience}
          loading={loadingScience}
          title={"Science"}
          news={science}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default AllNewsPage;
