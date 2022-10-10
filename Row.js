import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Row({ name, phone }) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textView}>Name: {name}</Text>
      <Text style={styles.textView}>Phone: {phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  textView: {
    padding: 10,
  },
});

export default Row;
