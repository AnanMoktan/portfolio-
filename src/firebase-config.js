import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAPqfdP1mt2XigzukUd6v-mmMVL9gRYg8Y",
  /*api keys*/
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
