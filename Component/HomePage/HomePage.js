import { Container, Image, ScrollableTab, Tab, Tabs, Text } from "native-base";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItems from "./CarouselItem";
import TopNavigation from "./TopNavigation";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const carouselItems = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let carousel = null;

  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "blue",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          borderColor: "Black",
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <Container>
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        style={{ borderColor: "#6000D2" }}
        locked={true}
      >
        <Tab
          heading="Sports"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <View
            style={{
              backgroundColor: "#6000D2",
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 3,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              zIndex: 0
            }}
          />
          <CarouselItems />
        </Tab>
        <Tab
          heading="Science"
          tabStyle={{
            backgroundColor: "#6000D2",
            borderBottomColor: "#6000D2",
          }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
        <Tab
          heading="Business"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
        <Tab
          heading="Politics"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
        <Tab
          heading="Entertainment"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>

        <Tab
          heading="Sports"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
        <Tab
          heading="Sports"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
        <Tab
          heading="Sports"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          <Text>Tab 1</Text>
        </Tab>
      </Tabs>
    </Container>
    // <View style={{ flex: 1,backgroundColor:"white" }}>
    // <Container>
    //   <Tabs style={{ position: "absolute" }}>
    //     <Tab heading="Tab1">
    //       <Text>First tab</Text>
    //     </Tab>
    //     <Tab heading="Tab2">
    //       <Text>Second tab</Text>
    //     </Tab>
    //     <Tab heading="Tab3">
    //       <Text>Third tab</Text>
    //     </Tab>
    //   </Tabs>

    // </Container>

    // </View>
  );
};

export default HomePage;
