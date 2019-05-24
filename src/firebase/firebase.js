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

const database = firebase.database();

// database
//   .ref()
//   .set({
//     name: "Shock",
//     age: 30,
//     isSingle: false,
//     location: {
//       city: "Taichung",
//       country: "Taiwan"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

database.ref('isSingle').set(null);

database
  // .ref("isSingle")
  .ref()
  .remove()
  .then(() => {
    console.log("data was removed");
  })
  .catch(e => {
    console.log("Did not remove data", e);
  });
