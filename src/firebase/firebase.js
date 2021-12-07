import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/performance";
var firebaseConfig = {
  apiKey: "AIzaSyDtCdk6YHwVDk2G9GEgyfJrmbZkbWgouUU",
  authDomain: "discord-c2f3d.firebaseapp.com",
  projectId: "discord-c2f3d",
  storageBucket: "discord-c2f3d.appspot.com",
  messagingSenderId: "244045452548",
  appId: "1:244045452548:web:3acaf51e6f6d8221552c51",
}
  firebase.initializeApp(firebaseConfig);
  export const firestore=firebase.firestore();
  export default firebase;
  export const auth=firebase.auth();
  export const storage=firebase.storage();
  export const perf = firebase.performance();
  export const db=firebase.database();
  export const Googleprovider=new firebase.auth.GoogleAuthProvider();
  // const signinWithGithub=()=>{
//   const provider=new firebase.auth.GithubAuthProvider();
//   auth.signInWithPopup(provider).catch(alert);
// }
  export const CreateUserProfileDocument=()=>{
    const userRef=firestore.collection('users').doc(auth.currentUser.uid);
    userRef.set({
      username:auth.currentUser.displayName,
      useremail:auth.currentUser.email,
      userphoto:auth.currentUser.photoURL,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      roles:{}
    },{merge:true})
  }
