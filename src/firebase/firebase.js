import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/performance";
var firebaseConfig = {
  apiKey: "AIzaSyB0OxR-Rc-Ic0BA6BwjOuaFgbRhg51QMmA",
  authDomain: "discord-dbd6d.firebaseapp.com",
  projectId: "discord-dbd6d",
  storageBucket: "discord-dbd6d.appspot.com",
  messagingSenderId: "116772992074",
  appId: "1:116772992074:web:64d1becd60008dbfd5e2b3",
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
