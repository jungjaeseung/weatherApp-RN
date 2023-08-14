import React from "react";
import { Text } from "react-native";
export default Day = ({ dayMs }) => {
  return <Text>{new Date(dayMs * 1000).toString().substring(0, 10)}</Text>;
};
