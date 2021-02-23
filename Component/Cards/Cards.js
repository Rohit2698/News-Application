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
import LoadingFailed from "../../Images/loadingFailed.jpg";

export const Cards = ({ navigation, news, errorLoading }) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
    "window"
  );

  if (!errorLoading) {
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {news.title}
            </Text>
          </CardItem>
        </Card>
      </Content>
    );
  } else {
    return (
      <Content
        style={{
          padding: 20,
          width: SCREEN_WIDTH,
          marginTop: 59,
        }}
      >
        <Card style={{ height: 380 }}>
          <CardItem cardBody>
            <Image
              source={LoadingFailed}
              style={{ height: 380, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
      </Content>
    );
  }
};
