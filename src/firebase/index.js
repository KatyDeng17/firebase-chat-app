import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config'; 

const app = firebase.initializeApp(config.firebase);

export default app.database(); 

// var config = {
//   apiKey: "AIzaSyAxFXOgn92AUknHm3Mjkj2lLb6vv7-g9mE",
//   authDomain: "katy-react-chat-app-63541.firebaseapp.com",
//   databaseURL: "https://katy-react-chat-app-63541.firebaseio.com",
//   projectId: "katy-react-chat-app",
//   storageBucket: "",
//   messagingSenderId: "914056323649"
// };