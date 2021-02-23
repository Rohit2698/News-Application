import { Container, ScrollableTab, Tab, Tabs } from "native-base";
import React from "react";
import { Dimensions, View } from "react-native";
import AllNewsPage from "../News/AllNewsPage";
import SportsPage from "../News/SportsPage";
import SciencePage from "../News/SciencePage";
import BusinessPage from "../News/BusinessPage";
import EntertainmentPage from "../News/Entertainment";
import TechnologyPage from "../News/Technology";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const backGroundDesign = () => {
  return (
    <View
      style={{
        backgroundColor: "#6000D2",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        zIndex: 0,
      }}
    />
  );
};

const HomePage = ({ navigation }) => {
  return (
    <Container>
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        style={{ borderColor: "#6000D2" }}
        locked={true}
      >
        <Tab
          heading="All"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          {backGroundDesign()}
          <AllNewsPage navigation={navigation} />
        </Tab>
        <Tab
          heading="Sports"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          {backGroundDesign()}
          <SportsPage navigation={navigation} />
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
          {backGroundDesign()}
          <SciencePage navigation={navigation} />
        </Tab>
        <Tab
          heading="Business"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          {backGroundDesign()}
          <BusinessPage navigation={navigation} />
        </Tab>
        <Tab
          heading="Entertainment"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          {backGroundDesign()}
          <EntertainmentPage navigation={navigation} />
        </Tab>

        <Tab
          heading="Technology"
          tabStyle={{ backgroundColor: "#6000D2" }}
          textStyle={{ color: "white" }}
          activeTabStyle={{ backgroundColor: "#6000D2" }}
        >
          {backGroundDesign()}
          <TechnologyPage navigation={navigation} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomePage;
