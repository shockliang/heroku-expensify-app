import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUT_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on(
//   "value",
//   snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   },
//   e => {
//     console.log("fetching array data failed", e);
//   }
// );

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 111000,
//   createdAt: 97930023985
// });
// database.ref('expenses').push({
//   description: 'Water bill',
//   note: '',
//   amount: 6000,
//   createdAt: 981243543253
// });
// database.ref('expenses').push({
//   description: 'phone bill',
//   note: '',
//   amount: 70000,
//   createdAt: 983404738974
// });

// database.ref("notes").push({
//   title: "To do 2",
//   body: "Do something"
// });

// database.ref("notes/-LfmidQH00cLgC6ojOi9").update({
//   body: "Go for run again"
// });

// database.ref("notes/-LfmidQH00cLgC6ojOi9").remove();

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(22);
// }, 1500);

// setTimeout(() => {
//   database.ref("age").set(33);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(55);
// }, 10500);

// database
//   .ref("location/city")
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Shock",
//     age: 30,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "SGT"
//     },
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

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Seattle"
//   })
//   .then(() => {
//     console.log("data was updated");
//   })
//   .catch(e => {
//     console.log("Did not update data", e);
//   });

// database.ref('isSingle').set(null);

// database
//   // .ref("isSingle")
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data was removed");
//   })
//   .catch(e => {
//     console.log("Did not remove data", e);
//   });
