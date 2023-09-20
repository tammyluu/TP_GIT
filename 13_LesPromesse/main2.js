// URL de l'API
const apiUrl = "https://pokeapi.co/api/v2/pokemon/25"

//utiliser du fetch
fetch (apiUrl)
    .then(response =>{
        //verify if the response is OK (HTTP 200)
        if (!response.ok){
            throw new Error (`La requette a echoue avec un status code ${response.status}`)
        }
        // Parser la réponse en Json
        return response.json()

    }).then (data => {
        // traitement de dones de la reponse
        console.log("donnees recu : ", data);
        
    }).catch(error =>{
        // gestion des erreurs
        console.log('une erreur' + error);
    })