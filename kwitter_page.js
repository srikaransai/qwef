var firebaseConfig = {
    apiKey: "AIzaSyAWiDz3ErifZfVZkzwEggdTPyxUVy6apMo",
    authDomain: "kwitter-stuff-46ddd.firebaseapp.com",
    databaseURL: "https://kwitter-stuff-46ddd-default-rtdb.firebaseio.com",
    projectId: "kwitter-stuff-46ddd",
    storageBucket: "kwitter-stuff-46ddd.appspot.com",
    messagingSenderId: "643894557992",
    appId: "1:643894557992:web:0d59a3c404a145b3c7e41d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name, 
        message: msg, 
        like: 0
    });
    document.getElementById("msg").value="";

}
