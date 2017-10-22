import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdzn30L4gcl7jzZufD-c1oaYV7r-i1gD4",
    authDomain: "mymusic-276da.firebaseapp.com",
    databaseURL: "https://mymusic-276da.firebaseio.com",
    projectId: "mymusic-276da",
    storageBucket: "mymusic-276da.appspot.com",
    messagingSenderId: "668110836631"
  };
 var fire =  firebase.initializeApp(config);
 export default fire
