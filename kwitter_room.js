var firebaseConfig = {
      apiKey: "AIzaSyAwEiPvzIe3ToAj4dT5U-EtT-h3GoeS2y8",
      authDomain: "socialize-189b6.firebaseapp.com",
      databaseURL: "https://socialize-189b6-default-rtdb.firebaseio.com",
      projectId: "socialize-189b6",
      storageBucket: "socialize-189b6.appspot.com",
      messagingSenderId: "253090893536",
      appId: "1:253090893536:web:092d8c31818a15f7f28a85",
      measurementId: "G-WBLC8PCR71"
    };
    
    var app = initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });
      
      localStorage.setItem("room _name", room_name);

      window.location = "kwitter_page.html"; 
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names );
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
