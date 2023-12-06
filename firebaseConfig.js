import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHpVb4JbsveioJV-eb7a3bNKr7VyKhuI4",
  authDomain: "dhd-44be0.firebaseapp.com",
  projectId: "dhd-44be0",
  storageBucket: "dhd-44be0.appspot.com",
  messagingSenderId: "124606557096",
  appId: "1:124606557096:web:56247ad8b9bedb8efd8b9d",
  measurementId: "G-P3442BLFSM",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// export const auth = getAuth(app);
const auth = getAuth(app);

export { app, auth, getApp, getAuth };
