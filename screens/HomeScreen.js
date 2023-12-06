import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import { auth } from "../firebaseConfig";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>
        Welcome Please Login In or Create A Account!
      </Text>

      <Button
        style={styles.logos}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={styles.text}>Login In</Text>
      </Button>

      <Button
        style={styles.logos}
        onPress={() => {
          navigation.navigate("create");
        }}
      >
        <Text style={styles.text}>Create A Account</Text>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7C3A5",
  },
  logo: {
    fontSize: 17,
    fontWeight: "bold",
    // margin: 30,
    // padding: 15,
    marginLeft: 20,
    color: "#675A4D",
    marginTop: 100,
    marginBottom: 100,
  },
  logos: {
    margin: 30,
    padding: 15,
    backgroundColor: "#675A4D",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
