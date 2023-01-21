import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { useGlobalContext } from "../Auth/context";

const Login = ({ navigation }) => {
  const image = {
    uri: "https://thumbs.dreamstime.com/b/contact-us-wallpaper-black-white-communication-seamless-pattern-tiling-textures-thin-line-web-icons-set-vector-69563300.jpg",
  };

  const { isAuth, setisAuth } = useGlobalContext();
  console.log(isAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleAuth = () => {
    if (username && password) {
      setisAuth(true);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.screen}>
          <Text style={styles.text}>Login</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button color="#ff5200" title="Login" onPress={handleAuth} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
  textInput: {
    marginBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1.5,
    paddingTop: 20,
    paddingBottom: 5,
    borderBottomColor: "#ff5200",
    color: "black",
    textAlign: "center",
  },
});
