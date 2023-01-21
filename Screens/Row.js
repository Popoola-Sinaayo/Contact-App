import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Row({ name, phone }) {
  return (
    <TouchableOpacity style={styles.mainView} onPress={() => alert(name)}>
      <Text style={styles.textView}>Name: {name}</Text>
      <Text style={styles.textView}>Phone: {phone}</Text>
    </TouchableOpacity>
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
