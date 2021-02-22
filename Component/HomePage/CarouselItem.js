import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

const CarouselItems = ({ navigation, title, news }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 350,
          padding: 10,
          marginLeft: 25,
          marginRight: 25,
          elevation: 5,
          marginBottom: 10,
        }}
      >
        <Image
          style={{ height: "50%", width: "100%", borderRadius: 10 }}
          source={{
            uri: `${item.urlToImage}`,
          }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
          <Text>{item.author}</Text>
          <Text>{item.publishedAt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        marginTop: 50,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
          marginBottom: 20,
          marginLeft: 25,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Carousel
          layout={"default"}
          data={news}
          sliderWidth={300}
          itemWidth={350}
          itemHeight={300}
          containerCustomStyle={{ flex: 1 }}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </View>
  );
};

export default CarouselItems;
