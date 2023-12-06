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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function CreateScreen({ navigation }) {
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPW, setUserPW] = useState();
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPW)
        .then((userCredential) => {
          console.log("user created");
          setUserFirstName("");
          setUserLastName("");
          setUserEmail("");
          setUserPW("");
          setLoading(false);
          navigation.navigate("detail");
        })
        .catch((error) => {
          console.log("error", error.message);
        });
    } catch (error) {
      console.log("try error", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Welcome Create Account!</Text>

        <TextInput
          style={styles.inputs}
          label="First Name"
          onChangeText={setUserFirstName}
          value={userFirstName}
        />
        <TextInput
          style={styles.inputs}
          label="Last Name"
          onChangeText={setUserLastName}
          value={userLastName}
        />
        <TextInput
          style={styles.inputs}
          label="User Email"
          onChangeText={setUserEmail}
          value={userEmail}
        />
        <TextInput
          style={styles.inputs}
          label="User Password"
          onChangeText={setUserPW}
          value={userPW}
        />
        <Button
          style={styles.button}
          title="Sign In"
          onPress={createUser}
          mode="contained"
        >
          Create Account
        </Button>

        <Button
          style={styles.logos}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text style={styles.text}>Go Back Home</Text>
        </Button>
        <ActivityIndicator size="large" color="#0000ff" animating={loading} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7C3A5",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 30,
    padding: 15,
    color: "#675A4D",
    marginTop: 100,
  },
  smallHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  inputs: {
    marginTop: 10,
    backgroundColor: "#D7C3A5",
    width: 350,
    marginLeft: 30,
    marginBottom: 20,
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: "#675A4D",
    color: "#FFFFFF",
  },
  logos: {
    margin: 20,
    padding: 10,
    backgroundColor: "#675A4D",
  },
  text: {
    color: "#FFFFFF",

    fontWeight: "bold",
  },
});
