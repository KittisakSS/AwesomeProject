import React from "react";
import { ScrollView, View } from "react-native";
import Cover from "../../components/week6/Cover";
import HomeIconMenu from "../../components/week6/HomeIconMenu";
import Tour from "../../components/week6/Tour";
import TourFlatList from "../../components/week6/TourFlatList";
import Event from "../../components/week6/Event";

export default function Home() {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "lightyellow", marginTop: 20 }}>
        <Cover />
        <HomeIconMenu />
        <Tour style={{ margin: 20 }} />
        <TourFlatList style={{ margin: 20 }} />
        <Event style={{ margin: 20 }} />
      </View>
    </ScrollView>
  );
}
