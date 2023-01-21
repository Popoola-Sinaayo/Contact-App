import { View, Text } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactList from "../Screens/ContactList";
import AddContact from "../Screens/AddContact";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const ContactsTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Contacts") {
            iconName = focused ? "people-circle" : "people-outline";
          } else if (route.name === "AddContact") {
            iconName = focused ? "person-add" : "person-add-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff5200",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Contacts" options={{ headerShown: false }}>
        {(props) => {
          return <ContactList {...props} />;
        }}
      </Tab.Screen>
      <Tab.Screen
        name="AddContact"
        component={AddContact}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default ContactsTabs;
