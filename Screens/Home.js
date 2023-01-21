import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useGlobalContext } from "../Auth/context";

const Home = ({ navigation }) => {
  const image = {
    uri: "https://thumbs.dreamstime.com/b/contact-us-wallpaper-black-white-communication-seamless-pattern-tiling-textures-thin-line-web-icons-set-vector-69563300.jpg",
  };
  const { isAuth } = useGlobalContext();
  console.log(isAuth);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.screen}>
          <Text style={styles.text}>Welcome To Contacts App</Text>
          <View style={styles.button}>
            <Button
              color="#ff5200"
              title="Proceed to Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  screen: {
    marginTop: Constants.statusBarHeight + 40,
    margin: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    color: "#ff5200",
    fontWeight: "bold",
  },
});
