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

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 111000,
  createdAt: 97930023985
});
database.ref('expenses').push({
  description: 'Water bill',
  note: '',
  amount: 6000,
  createdAt: 981243543253
});
database.ref('expenses').push({
  description: 'phone bill',
  note: '',
  amount: 70000,
  createdAt: 983404738974
});

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
