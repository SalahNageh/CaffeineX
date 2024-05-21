import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5upESmk5ku4Wm7F7gJ0L_8VAFpNdQBfE",
  authDomain: "caffeinex-c751d.firebaseapp.com",
  projectId: "caffeinex-c751d",
  storageBucket: "caffeinex-c751d.appspot.com",
  messagingSenderId: "585048472373",
  appId: "1:585048472373:web:a2ece7c8b992f4862e2a7c",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
