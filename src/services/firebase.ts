import { getFirestore } from "@firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

type FirebaseConfig = typeof firebaseConfig;

class Firebase {
  static #instance: Firebase;
  app: FirebaseApp;

  constructor(config: FirebaseConfig) {
    if (Firebase.#instance) {
      this.app = Firebase.#instance.app;
      return Firebase.#instance;
    }

    // Initialize Firebase
    this.app = initializeApp(config);
    Firebase.#instance = this;
  }
}

export const app = new Firebase(firebaseConfig).app;

export const auth = getAuth(app);

export const db = getFirestore(app);
