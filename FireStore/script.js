// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore,  collection, addDoc , getDocs ,  doc, setDoc , updateDoc, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyBQqpAsLewYET5IIV1Ie5eU3oAcoOo3tX8",
  authDomain: "fourrg-project.firebaseapp.com",
  projectId: "fourrg-project",
  storageBucket: "fourrg-project.appspot.com",
  messagingSenderId: "1072096496186",
  appId: "1:1072096496186:web:a428b92c402de058890303",
  measurementId: "G-EEC9FG49YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
signBtn.addEventListener("click",async()=>{
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // let userData =  {
    //     name: name.value,
    //     phone:phone.value,
    //     email: email.value,
    //     password: password.value
    // }

    
    // createUserWithEmailAndPassword(auth, userData['email'], userData['password'])
    //   .then(async(userCredential) => {
    //     // Signed in 
        // try {
        //     const docRef = await addDoc(collection(db, "user"), {
        //       ...userData
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   }
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
      console.log(auth.currentUser.uid
        )




// const querySnapshot = await getDocs(collection(db, "user"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ` 
//   ,doc.data())
// })

await setDoc(doc(db, "user", "LA"), {
    ...
  });



// const cityRef = doc(db, 'user', 'LA');
// setDoc(cityRef, { capital: true }, { merge: true });


const washingtonRef = doc(db, "user", auth.currentUser.uid);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  name: name.value,
  phone: phone.value
})

})