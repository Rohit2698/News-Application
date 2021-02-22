import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

import { Image, Dimensions } from "react-native";

export const Cards = ({ navigation, news }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );

  return (
    <Content
      style={{
        padding: 20,
        width: SCREEN_WIDTH,
      }}
    >
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: `${news.urlToImage}`,
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{news.title}</Text>
        </CardItem>
      </Card>
    </Content>
  );
};
