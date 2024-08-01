import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Tour(props) {
  //   const tours = [
  //     {
  //       id: "1",
  //       title: "Truckfighters: Performing",
  //       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg",
  //       month: "DEC",
  //       date: "30",
  //       datetime: "Thu, DEC 30, 09.00 am",
  //       place: "London",
  //     },
  //     {
  //       id: "2",
  //       title: "Paris Motor Show",
  //       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg",
  //       month: "DEC",
  //       date: "31",
  //       datetime: "Thu, DEC 30, 09.00 am",
  //       place: "Paris",
  //     },
  //     {
  //       id: "3",
  //       title: "Bearded Theory Spring",
  //       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg",
  //       month: "JAN",
  //       date: "01",
  //       datetime: "Thu, JAN 01, 09.00 am",
  //       place: "Canada",
  //     },
  //     {
  //       id: "4",
  //       title: "BBC Music Introducing",
  //       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg",
  //       month: "JAN",
  //       date: "11",
  //       datetime: "Thu, JAN 11, 09.00 am",
  //       place: "USA",
  //     },
  //     {
  //       id: "5",
  //       title: "Start-Up Meeting 2022",
  //       uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg",
  //       month: "JAN",
  //       date: "21",
  //       datetime: "Thu, JAN 21, 09.00 am",
  //       place: "Thailand",
  //     },
  //   ];
  const [onlineTours, setOnlineTours] = useState([]);
  const loadOnlineTours = async () => {
    try {
      let text = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      let data = await text.json();
      console.log("Load Data : ", data);
      //SET STATE
      setOnlineTours(data);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Comming Events</Text>
      <Text style={{ color: "grey", marginBottom: 20 }}>
        What's the Worst That Could Happend
      </Text>
      <FlatList
        horizontal={true}
        data={onlineTours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{
                  width: 350,
                  height: 200,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
                source={{
                  uri: item.uri,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderWidth: 1,
                  width: 350,
                  height: 100,
                  borderColor: "gray",
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{ fontSize: 20, color: "red", textAlign: "center" }}
                  >
                    {item.month}
                  </Text>
                  <Text
                    style={{ fontSize: 20, color: "gray", textAlign: "center" }}
                  >
                    {item.date}
                  </Text>
                </View>
                <View style={{ padding: 10 }}>
                  <Text
                    style={{ fontSize: 20, color: "black", textAlign: "left" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ fontSize: 17, color: "gray", textAlign: "left" }}
                  >
                    {item.datetime}
                  </Text>
                  <Text
                    style={{ fontSize: 17, color: "gray", textAlign: "left" }}
                  >
                    {item.place}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
