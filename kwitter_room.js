const firebaseConfig = {
      apiKey: "AIzaSyD4O_W8aswuPuPMrxmid74Gj8OkQSqBNhU",
      authDomain: "kwitter-29019.firebaseapp.com",
      databaseURL: "https://kwitter-29019-default-rtdb.firebaseio.com",
      projectId: "kwitter-29019",
      storageBucket: "kwitter-29019.appspot.com",
      messagingSenderId: "876423312901",
      appId: "1:876423312901:web:0f973bd0168024b03b0e6c"
    };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML= "Welcome -"+ user_name+"!";

      function addroom(){

           room_name=document.getElementById("room_name").value;
           
           firebase.database().ref("/").child(room_name).update({
                 purpose= "add room"
           });

           localStorage.setItem("room_name", room_name);

           window.location= "kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-"+ Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'> #"+Room_names+" </div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();


function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}