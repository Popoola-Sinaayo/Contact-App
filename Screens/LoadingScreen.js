import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
  Easing,
} from "react-native";
import React, { useRef, useEffect } from "react";
import Constants from "expo-constants";

const Home = ({ navigation }) => {
  const image = {
    uri: "https://thumbs.dreamstime.com/b/contact-us-wallpaper-black-white-communication-seamless-pattern-tiling-textures-thin-line-web-icons-set-vector-69563300.jpg",
  };
//   const TransAnim = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.timing(TransAnim, {
//       toValue: 100,
//       easing: Easing.back(),
//       duration: 2000,
//       useNativeDriver: true,
//     }).start();
//   }, [TransAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.screen}>
          <Text style={styles.text}>Welcome To Contacts App</Text>
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
    fontSize: 40,
    color: "#ff5200",
    fontWeight: "bold",
  },
});
