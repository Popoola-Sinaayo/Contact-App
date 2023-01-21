import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

const AddContact = ({ addNewContact, navigation }) => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  // console.log(addNewContact);
  const showContact = () => {
    console.log(phone);
  };
  const handlePhoneChange = (phone) => {
    console.log(parseInt(phone));
    console.log(phone.length);
    if (parseInt(phone) !== NaN && phone.length <= 10) {
      console.log(phone);
      setPhone(phone);
    }
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
        onChangeText={(data) => handlePhoneChange(data)}
        placeholder="Enter Number"
        keyboardType="numeric"
      />
      <Button
        title="Add Contact"
        color="#ff5200"
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
          navigation.navigate("DisplayContacts");
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
    borderBottomWidth: 2,
    borderBottom: 2,
    borderRadius: 10,
    borderColor: "#ff5200",
    paddingLeft: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
    color: "#ff5200",
  },
});
