params = "https://jsonplaceholder.typicode.com/users"

function jsonObject(params, action) {
    fetch(params)
      .then(response => response.json())
      .then(json => action(json))
} 


function notification() {
    alert("Authentication failed - please try again.")
}


function checkUserPass(data) {
    const inputUser = document.getElementById("user").value
    const inputPass = document.getElementById("pass").value
    return data.find( user => inputUser === user.username && inputPass === user.email )
}


function autoFill(json) {
    const lng = json.length
    const rnd = Math.floor(Math.random() * lng);
    document.getElementById("user").value = json[rnd].username
    document.getElementById("pass").value = json[rnd].email
}


function submitCredentials(json) {
    const userData = checkUserPass(json)
    console.log(userData)
    if (userData) {
        document.getElementById("user").value = ""
        document.getElementById("pass").value = ""
        showData(userData)
    }
    else {
        notification()
    }    
}


function showData(userData) {

    document.getElementsByClassName("user-details-container")[0].innerHTML = ""

    for (const [keyL1, valueL1] of Object.entries(userData)) {

        if (typeof(valueL1) === "object") {

            createDivUserata(1, keyL1) 

            for (const [keyL2, valueL2] of Object.entries(valueL1)) {

                if (typeof(valueL2) === "object") {

                    createDivUserata(2, keyL2)

                    for (const [keyL3, valueL3] of Object.entries(valueL2)) {
                        createDivUserata(3, keyL3, valueL3)  
                    }
                }
                else {
                    createDivUserata(2, keyL2, valueL2)  
                }
            }
        }
        else {
            createDivUserata(1, keyL1, valueL1) 
        }
    }
}


function createDivUserata(levelMargin, key, value=false) {

    let div = document.createElement("div")
    div.className = "user-detail" 
    div.style.marginLeft = `${8 * levelMargin - 8}px`

    let spanKey = document.createElement("span")
    spanKey.innerHTML = `${key}: `
    div.appendChild(spanKey)

    if (value) {
        let spanValue = document.createElement("span")
        spanValue.innerHTML = value
        div.appendChild(spanValue)
    }

    document.getElementsByClassName("user-details-container")[0].appendChild(div)
}