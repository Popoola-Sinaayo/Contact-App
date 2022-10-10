import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

const AddContact = ({ addNewContact, toggleContact }) => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  // console.log(addNewContact);
  const showContact = () => {
    console.log(phone);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Add New Contact</Text>
      <TextInput
        value={FirstName}
        style={styles.inputs}
        onChangeText={setFirstName}
        placeholder="Firstname"
      />
      <TextInput
        value={lastName}
        style={styles.inputs}
        onChangeText={setLastName}
        placeholder="Lastname"
      />
      <TextInput
        style={styles.inputs}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter Number"
        keyboardType="numeric"
      />
      <Button
        title="Add Contact"
        onPress={() => {
          setFirstName("");
          setLastName("");
          setPhone("");
          showContact();
          addNewContact({
            firstName: FirstName,
            lastName: lastName,
            phone: phone,
          });
          toggleContact();
        }}
      />
    </View>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight + 40,
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  inputs: {
    borderWidth: 2,
    borderBottom: 2,
    borderRadius: 10,
    borderColor: "black",
    paddingLeft: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
});
