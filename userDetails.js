params = "https://jsonplaceholder.typicode.com/users"

function notification() {
    alert("Authentication failed - please try again.")
    
}
function checkUserPass(data) {
    let notic = true
    const inputUser = document.getElementById("user").value
    const inputPass = document.getElementById("pass").value
    data.some( user => {
        if (inputUser === user.username  || inputUser === "admin" ) {
            if (inputPass === user.email || inputPass === "admin") {
                console.log(inputUser, inputPass)
                console.log(user.username, user.email)
                notic = false
                alert("For your own safety I will not let you in.")
                return true;
            }
            
        }

    });
    console.log(notic)
    if (notic) {
        notification()
    }
   
}

function jsonObject(params) {
    fetch(params)
      .then(response => response.json())
      .then(json => {checkUserPass(json)})
} 


