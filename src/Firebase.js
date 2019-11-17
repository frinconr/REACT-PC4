import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyArPtmpgtYcp-_ywLSJ68AnXNotk87yyU0",
    authDomain: "react-pc4.firebaseapp.com",
    databaseURL: "https://react-pc4.firebaseio.com",
    projectId: "react-pc4",
    storageBucket: "react-pc4.appspot.com",
    messagingSenderId: "523442633443",
};

firebase.initializeApp(firebaseConfig);

export default firebase;