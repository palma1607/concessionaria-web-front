function loadingPlatformFromAPI(){
    fetch("http://localhost:8080/plataforma")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        addPlatforms(data);
    })
}

function addPlatforms(data){
    data.forEach(function(platform){
        addPlatformLine(platform.nome)
    });
}

function addPlatformLine(name){
    const listPlatform = document.getElementById("platform-list")
    const itemLine = document.createElement("li")
    itemLine.innerText = name
    listPlatform.appendChild(itemLine)
}

function sendPlatformToAPI(){
    const plataformName = document.getElementById("input-platform").value
    const body = JSON.stringify({
        "nome" : plataformName,
        "modelos" : null
    })

    const headers = {
        "Content-Type" : "application/json"
    }

    fetch("http://localhost:8080/plataforma", {
        method : "POST",
        body : body,
        headers: headers
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
         addPlatformLine(plataformName)
    })
}