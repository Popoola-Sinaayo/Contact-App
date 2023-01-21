import React, { useEffect, useState } from "react";
import { Vibration } from "react-native";
import { StyleSheet, View, Button, Image } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import ContactsTabs from "./Tabs/ContactsTabs";
import LoadingScreen from "./Screens/LoadingScreen";
import { useGlobalContext } from "./Auth/context";
const Stack = createNativeStackNavigator();

export default function Main() {
  const [isLoading, setisLoading] = useState(true);
  const { isAuth } = useGlobalContext();
  console.log(isAuth, "from auth");
  useEffect(() => {
    setInterval(() => {
      setisLoading(false);
    }, 5000);
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {isAuth === false ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Contact"
              component={ContactsTabs}
              options={{
                headerTitle: "Contacts",
                headerTintColor: "#ff5200",
                headerTitleAlign: "center",
                headerBackVisible: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
