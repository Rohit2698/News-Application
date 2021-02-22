import { Container, Tab, Tabs, Text } from "native-base";
import React from "react";

const TopNavigation = () => {
  return (
    <Tabs>
      <Tab heading="Tab1">
        <Text>First tab</Text>
      </Tab>
      <Tab heading="Tab2">
        <Text>Second tab</Text>
      </Tab>
      <Tab heading="Tab3">
        <Text>Third tab</Text>
      </Tab>
    </Tabs>
  );
};

export default TopNavigation;
