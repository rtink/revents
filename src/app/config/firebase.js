import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaZYhueMr6pqHHcEzVG4TCVnVXudhsRuA",
  authDomain: "revents-rhonda.firebaseapp.com",
  databaseURL: "https://revents-rhonda.firebaseio.com",
  projectId: "revents-rhonda",
  storageBucket: "revents-rhonda.appspot.com",
  messagingSenderId: "504097773215"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;