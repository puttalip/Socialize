function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().rel("/").child(space_name).update({
        purpose : "adding user"

    });

    window.location = "kwitter_room.html";
}