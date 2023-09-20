const p  = new Promise ((resolve, reject) =>{
    //logic
    let test = true
    setTimeout (() =>{
        if (test) {
            resolve ({data : "Les données envoyées par la promise", message : "ok"})
            console.log(resolve);
        } else {
            reject ({message : " Message d'erreur en cas échec"})
        }
    }, 3000)
})
//Flux d'execution
p.then ((response) =>{
    result.innerHTML =response.data //utiliser un var mais on peut déclarer après
}).catch(err => {
    result.innerHTML = err.message
})
const result = document.querySelector("#result") 
result.innerHTML = "Encours d'exécution"

const  get_promise_async = async () => {
    // pour récupérer le reject on peut utiliser un try catch
    try {
        const resultat =  await p 
        console.log(resultat);
        result.innerHTML =  resultat.data
    }catch (ex){
        console.log(ex)
        result.innerHTML = ex.message;
    }
}
get_promise_async()