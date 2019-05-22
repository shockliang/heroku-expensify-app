import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "myapikey",
  authDomain: "expensify-2cda8.firebaseapp.com",
  databaseURL: "https://expensify-2cda8.firebaseio.com",
  projectId: "expensify-2cda8",
  storageBucket: "expensify-2cda8.appspot.com",
  messagingSenderId: "myappid",
  appId: "1:myappid:web:163351258ba69408"
};

firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Shock"
  });
