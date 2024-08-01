import React from "react";
import { View, TextInput } from "react-native";
import MyIcon from "./MyIcon";



export default function Section5() {
  return (
    <View
      style={{
        margin: 20,
        padding: 10,
        // borderWidth: 1,
        // borderColor: "gray",
        // borderRadius: 20,
        borderTopWidth :1,
        borderBottomWidth: 1,
      }}
    >
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="#4a90a4" />
        <MyIcon title="coffee" name="coffee" size={30} color="#4a90a4" />
        <MyIcon title="bath" name="bath" size={30} color="#4a90a4" />
        <MyIcon title="car" name="car" size={30} color="#4a90a4" />
        <MyIcon title="paw" name="paw" size={30} color="#4a90a4" />
      </View>
    </View>
  );
}