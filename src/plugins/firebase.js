import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzuMR39na__f8WWTbzKO5Zh2Yx1wobqX4",
  authDomain: "belaminas-e2131.firebaseapp.com",
  projectId: "belaminas-e2131",
  storageBucket: "belaminas-e2131.appspot.com",
  messagingSenderId: "760717212089",
  appId: "1:760717212089:web:bbc2a01c1394aadf10de68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const storage = firebaseApp.storage()
const auth = firebaseApp.auth()

export { db, storage, auth }