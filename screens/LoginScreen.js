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

export default function LoginScreen({ navigation, route }) {
  let data = route.params;
  const [signInEmailAddress, setsignInEmailAddress] = useState();
  const [signInPW, setSignInPW] = useState();

  const [loading, setLoading] = useState(false);

  const signInUser = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, signInEmailAddress, signInPW)
        .then((userCredential) => {
          console.log("user created");
          setsignInEmailAddress("");
          setSignInPW("");
          setLoading(false);
          navigation.navigate("detail");
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
          console.log("error", error.message);
        });
    } catch (error) {
      console.log("try error", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Welcome Please Sign In!</Text>
        <View>
          <TextInput
            style={styles.inputs}
            label="User Name"
            onChangeText={setsignInEmailAddress}
            value={signInEmailAddress}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputs}
            label="User Password"
            onChangeText={setSignInPW}
            value={signInPW}
          />
          <Button
            style={styles.button}
            title="Sign In"
            onPress={signInUser}
            mode="contained"
          >
            Sign In
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
    marginBottom: 100,
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
    marginBottom: 30,
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
