import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, SectionList, Text } from "react-native";
import Row from "./Row";
import { compareNames } from "./contacts";

function ContactList({ contacts }) {
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const [titledContacts, setTitledContacts] = useState([]);
  useEffect(() => {
    setSortedContacts((oldContacts) => {
      return oldContacts.sort(compareNames);
    });
  }, []);
  const extractFirstLetter = (object) => {
    return object.map((data) => data.name[0]);
  };
  useEffect(() => {
    let currentIndex;
    const newArray = [];
    const letterIndex = extractFirstLetter(sortedContacts);
    let firstLetter = letterIndex[0];
    console.log(firstLetter);
    currentIndex = letterIndex.lastIndexOf(firstLetter);
    console.log(currentIndex);

    while (currentIndex < sortedContacts.length && currentIndex !== -1) {
      let currrentObject = { title: firstLetter, data: [] };
      for (let i = 0; i < currentIndex + 1; i++) {
        if (sortedContacts[i].name[0] === firstLetter)
          currrentObject.data.push(sortedContacts[i]);
      }
      // console.log(currrentObject);
      newArray.push(currrentObject);
      firstLetter = letterIndex[currentIndex + 1];
      currentIndex = letterIndex.lastIndexOf(firstLetter);
      console.log(firstLetter);
      console.log(currentIndex);
      console.log("yes");
      console.log(newArray);
    }
    setTitledContacts(newArray);
  }, []);
  console.log(titledContacts);
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      backgroundColor: "grey",
      padding: 10,
      borderRadius: 20,
      width: "10%",
      marginTop: 30,
      textAlign: "center",
    },
  });
  return (
    <View>
      {/* <FlatList renderItem={({ item }) => <Row {...item} />} data={sortedContacts} /> */}
      <SectionList
        sections={titledContacts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Row {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </View>
  );
}

export default ContactList;
