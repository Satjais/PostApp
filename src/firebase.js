import firebase from "firebase" ;
import 'firebase/storage';
export const firebaseApp= firebase.initializeApp({
    
        apiKey: "AIzaSyDwRtEOSe_nts1W4YqAJjb75lceasijzlk",
        authDomain: "postapp-8d5a2.firebaseapp.com",
        projectId: "postapp-8d5a2",
        storageBucket: "postapp-8d5a2.appspot.com",
        messagingSenderId: "188355070500",
        appId: "1:188355070500:web:1bf09b4854ea94cc0aa6b1"
      
    
}); 

var db = firebaseApp.firestore(); 
  export  {db };