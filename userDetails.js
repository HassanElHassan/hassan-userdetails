params = "https://jsonplaceholder.typicode.com/users"

function notification() {
    alert("Authentication failed - please try again.")
    
}
function checkUserPass(data) {

    const inputUser = document.getElementById("user").value

    const inputPass = document.getElementById("pass").value

    return data.find( user => inputUser === user.username && inputPass === user.email )

}

function jsonObject(params, action) {
    fetch(params)
      .then(response => response.json())
      .then(json => action(json))
} 

function login(json) {

    if (checkUserPass(json)) {
        document.getElementById("user").value = ""
        document.getElementById("pass").value = ""
    }
    else {
        notification()
    }
    
}

function autoFill(json) {
    lng = json.length
    rnd = Math.floor(Math.random() * lng);
    document.getElementById("user").value = json[rnd].username
    document.getElementById("pass").value = json[rnd].email
}
