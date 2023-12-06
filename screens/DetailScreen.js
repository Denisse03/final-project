import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, List } from "react-native-paper";

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Flavor Chocolates! </Text>

      <View>
        <Text style={styles.chocolate}>{" \u25CF Milk Chocolate"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Dark Chocolate"} </Text>
        <Text style={styles.chocolate}>{" \u25CF White Chocolate"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Caramel Chocolate"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Guanduja"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Dark Mint"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Milk Raspberry"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Dark Raspberry"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Extra Dark Chocolate"} </Text>
        <Text style={styles.chocolate}>{" \u25CF Dark Mocha"} </Text>

        <Button
          style={styles.logos}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text style={styles.text}>Go Back Home</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7C3A5",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 30,
    // padding: 45,
    color: "#675A4D",
    marginLeft: 45,
    // height: 140,
    // width: 360,
    // backgroundColor: "#FFFFFF",
  },
  chocolate: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
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
