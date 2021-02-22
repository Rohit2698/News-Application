import axios from "axios";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { newsByCategoryApi } from "../../Constants/ApiConstants";
import CarouselItems from "../HomePage/CarouselItem";

const SportsNewsPage = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );
  const [sportsNews, setSportsNews] = useState();
  const [businessNews, setBusinessNews] = useState();
  const [entertainment, setEntertainment] = useState();
  const [technology, setTechnology] = useState();
  const [health, setHealth] = useState();
  const [science, setScience] = useState();
  useEffect(() => {
    axios
      .get(newsByCategoryApi("sports"))
      .then((response) => setSportsNews(response.data.articles));

    axios
      .get(newsByCategoryApi("business"))
      .then((response) => setBusinessNews(response.data.articles));

    axios
      .get(newsByCategoryApi("entertainment"))
      .then((response) => setEntertainment(response.data.articles));

    axios
      .get(newsByCategoryApi("technology"))
      .then((response) => setTechnology(response.data.articles));

    axios
      .get(newsByCategoryApi("health"))
      .then((response) => setHealth(response.data.articles));

    axios
      .get(newsByCategoryApi("science"))
      .then((response) => setScience(response.data.articles));
  }, []);

  const Sports = [
    {
      url: "https://static.theprint.in/wp-content/uploads/2020/07/football.jpg",
      title: "Market",
      text: "Text 1",
    },
    {
      url:
        "https://img.etimg.com/thumb/msid-81151870,width-1070,height-580,imgsize-468337,overlay-etmarkets/photo.jpg",
      title: "Item 2",
      text: "Text 2",
    },
    {
      url:
        "https://img.etimg.com/thumb/msid-81151870,width-1070,height-580,imgsize-468337,overlay-etmarkets/photo.jpg",
      title: "Item 3",
      text: "Text 3",
    },
    {
      url:
        "https://img.etimg.com/thumb/msid-81151870,width-1070,height-580,imgsize-468337,overlay-etmarkets/photo.jpg",
      title: "Item 4",
      text: "Text 4",
    },
    {
      url:
        "https://img.etimg.com/thumb/msid-81151870,width-1070,height-580,imgsize-468337,overlay-etmarkets/photo.jpg",
      title: "Item 5",
      text: "Text 5",
    },
  ];

  return (
    <ScrollView
      style={{
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}
    >
      <View>
        <CarouselItems title={"Sports"} news={sportsNews} />
      </View>
      <View>
        <CarouselItems title={"Business"} news={businessNews} />
      </View>
      <View>
        <CarouselItems title={"Entertainment"} news={entertainment} />
      </View>
      <View>
        <CarouselItems title={"Technology"} news={technology} />
      </View>
      <View>
        <CarouselItems title={"Health"} news={health} />
      </View>
      <View style={{ marginBottom: 200 }}>
        <CarouselItems title={"Science"} news={science} />
      </View>
    </ScrollView>
  );
};

export default SportsNewsPage;
