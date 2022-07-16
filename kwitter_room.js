const firebaseConfig = {
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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("color_white").innerHTML="Welcome "+user_name+"!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='readirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function readirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";

}
 function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

 }
