const postApi = "https://pokeapi.co/api/v2/pokemon/ditto"

 fetch (postApi)
    .then(function(response){
        return response.json();
        // JSON.parse : JSON -> JS types
        
    })
    .then (function(posts){
        console.log("1er",posts);
        for (let post in  posts){
            console.log( post);
            let getInfo = response.json().results
            return   `
            <img src="${posts.sprites.front_shiny}" ></img>
            <h5>${post.name}</h5>
            <p>${post.weight}</p>
           <p>${post.height}</p>
                    `;
        }
        //render on page HTML
        let htmls = posts( function (post){
           return  `
        
            <img src="${post.sprites.front_shiny}" ></img>
            <h5>${post.name}</h5>
            <p>${post.weight}</p>
           <p>${post.height}</p>
                    `;
       }) ; // map: récuperer  un array qui tient nbr éléments corresponse (= nbr éléments de posts)
        // return a string
           let html = htmls.join('');
            document.getElementById('post-block').innerHTML = html;
        })
    .catch (function (err) {
         console.log('eurreur ' + err);;
     });