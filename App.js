import React, { useState } from "react";
import { StyleSheet, View, Button, SectionList, Text } from "react-native";
import Constants from "expo-constants";
import phonecontacts from "./contacts";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

export default function App() {
  const [contacts, setContacts] = useState(phonecontacts);
  const [showContacts, setshowContacts] = useState(false);
  const [showAddContacts, setShowAddContacts] = useState(false);
  const addNewContact = (contact) => {
    setContacts((oldContacts) => {
      return [
        ...oldContacts,
        {
          key: oldContacts.length + 1,
          name: `${contact.firstName} ${contact.lastName}`,
          phone: contact.phone,
        },
      ];
    });
    console.log(contact);
  };
  return (
    <View style={styles.screen}>
      {!showContacts && !showAddContacts && (
        <View>
          <View style={styles.button}>
            <Button
              title="All Contacts"
              onPress={() => setshowContacts(!showContacts)}
            />
          </View>
          <Button
            title="Add Contact"
            onPress={() => setShowAddContacts(!showAddContacts)}
          />
        </View>
      )}
      {showContacts && (
        <View>
          <Button
            title="Minimize Contacts"
            onPress={() => setshowContacts(!showContacts)}
          />
          <ContactList contacts={contacts} />
        </View>
      )}
      {showAddContacts && (
        <AddContact
          addNewContact={addNewContact}
          toggleContact={() => setShowAddContacts(!showAddContacts)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight + 40,
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 100,
  },
  button: {
    marginBottom: 30,
  },
});
