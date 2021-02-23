import { Icon, Row, Text, View } from "native-base";
import React from "react";
import { Dimensions, Image, Linking, ScrollView } from "react-native";
import NoImage from "../../Images/noImage.jpg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const NewsDetail = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        {route.params.news.urlToImage ? (
          <>
            <Image
              source={{
                uri: `${route.params.news.urlToImage}`,
              }}
              style={{
                height: SCREEN_HEIGHT / 2,
                width: SCREEN_WIDTH,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignSelf: "center",
                resizeMode: "stretch",
              }}
            />
            <View style={{ position: "absolute", top: 40, left: 10 }}>
              <Icon
                type="FontAwesome"
                name="chevron-left"
                style={{ color: "white" }}
                onPress={() => navigation.pop()}
              />
            </View>
          </>
        ) : (
          <>
            <Image
              source={NoImage}
              style={{
                height: SCREEN_HEIGHT / 2,
                width: SCREEN_WIDTH,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignSelf: "center",
                resizeMode: "stretch",
              }}
            />
            <View style={{ position: "absolute", top: 40, left: 10 }}>
              <Icon
                type="FontAwesome"
                name="chevron-left"
                style={{ color: "black" }}
                onPress={() => navigation.pop()}
              />
            </View>
          </>
        )}
      </View>

      <Row
        style={{
          backgroundColor: "white",
          padding: 30,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{route.params.news.source.name}</Text>
          <Text style={{ color: "red" }}>Source</Text>
        </View>

        <View>
          {route.params.news.source.author ? (
            <View>
              <Text>{route.params.news.source.author}</Text>
              <Text style={{ color: "red" }}>Author</Text>
            </View>
          ) : null}
          {route.params.news.publishedAt ? (
            <View>
              <Text>{route.params.news.publishedAt}</Text>
              <Text style={{ color: "red" }}>Published At</Text>
            </View>
          ) : null}
        </View>
      </Row>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "normal" }}>
          {route.params.news.title}
        </Text>
        <Text style={{ fontSize: 18, textAlign: "justify" }}>
          {route.params.news.description}
        </Text>
        <Text style={{ fontSize: 18, textAlign: "justify" }}>
          {route.params.news.content}
        </Text>
        {route.params.news.url ? (
          <Text
            onPress={() => Linking.openURL(`${route.params.news.url}`)}
            style={{ color: "blue" }}
          >
            Click to checkout full news
          </Text>
        ) : null}
      </View>
      <View></View>
    </ScrollView>
  );
};

export default NewsDetail;
