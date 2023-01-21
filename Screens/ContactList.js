import React, { useEffect, useState } from "react";
import { View, StyleSheet, SectionList, Text } from "react-native";
import Row from "./Row";
import { compareNames } from "./contacts";
import contacts from "./contacts";
import axios from "axios";

function ContactList({ navigation }) {
  const getContacts = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?results=50&nat=US"
      );
      const data = await response.data;

      const gottenContact = data.results;
      const newContact = await gottenContact.map((contact) => {
        return {
          name: `${contact.name.first} ${contact.name.last}`,
          phone: contact.phone,
        };
      });
      sortData(newContact.sort(compareNames));
    } catch (error) {
      console.log(error);
    }
  };
  const [titledContacts, setTitledContacts] = useState([]);
  const extractFirstLetter = (object) => {
    return object.map((data) => data.name[0]);
  };
  const sortData = (contact) => {
    let currentIndex;
    const newArray = [];
    const letterIndex = extractFirstLetter(contact);
    let firstLetter = letterIndex[0];
    currentIndex = letterIndex.lastIndexOf(firstLetter);

    while (currentIndex < contact.length && currentIndex !== -1) {
      let currrentObject = { title: firstLetter, data: [] };
      for (let i = 0; i < currentIndex + 1; i++) {
        if (contact[i].name[0] === firstLetter)
          currrentObject.data.push(contact[i]);
      }
      newArray.push(currrentObject);
      firstLetter = letterIndex[currentIndex + 1];
      currentIndex = letterIndex.lastIndexOf(firstLetter);
    }
    setTitledContacts(newArray);
  };
  useEffect(() => {
    getContacts();
  }, []);
  const styles = StyleSheet.create({
    screen: {
      marginTop: 40,
      flex: 1,
      margin: 20,
      justifyContent: "center",
    },
    title: {
      fontSize: 20,
      backgroundColor: "#ff5200",
      color: "#fff",
      padding: 10,
      borderRadius: 20,
      width: "10%",
      marginTop: 30,
      textAlign: "center",
    },
  });
  return (
    <View style={styles.screen}>
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
