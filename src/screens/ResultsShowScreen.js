import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  return (
    <View>
      <Text>Show Results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
