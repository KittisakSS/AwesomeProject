import React from "react";
import { Text, View, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View
      style={{
        margin: 30,
        marginTop: -30,
        padding: 10,
        borderWidth: 1,
        borderColor: "#c3c3c3",
        borderRadius: 15,
        backgroundColor: "#ececec",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10, // สำหรับ Android
      }}
    >
      <Text style={{ fontSize: 27, textAlign: "center", fontWeight: "bold" }}>
        Hilton San Francisco
      </Text>
      <View
        style={{ flexDirection: "row", justifyContent: "center", margin: 5 }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="#fdc60a" />
          <FontAwesome name="star" size={20} color="#fdc60a" />
          <FontAwesome name="star" size={20} color="#fdc60a" />
          <FontAwesome name="star" size={20} color="#fdc60a" />
          <FontAwesome name="star-half" size={20} color="#fdc60a" />
        </View>
      </View>
      <Text style={{ color: "#444444", textAlign: "center", marginTop: 5 }}>
        Facilities provided may range from a modest quality mattress in a small
        room to large suites
      </Text>
    </View>
  );
}
