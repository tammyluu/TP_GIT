const postApi = "https://pokeapi.co/api/v2/pokemon/25"

 fetch (postApi)
    .then(function(response){
        return response.json();
        // JSON.parse : JSON -> JS types
    })
    .then (function(posts){
        console.log(posts);
      
        //render on page HTML
        // let htmls = tab.map( function (post){
        //     return  `<li>
        let htmls  =`
            <img src="${posts.sprites.front_shiny}" ></img>
            <h5>${posts.name}</h5>
            <p>${posts.weight}</p>
           <p>${posts.height}</p>
                    `;
      //  }) ; // map: récuperer  un arry qui tient nbr éléments corresponse (= nbr éléments de posts)
        // return a string
          //  let html = htmls.join('');
            document.getElementById('post-block').innerHTML = htmls;
        })
    .catch (function (err) {
         console.log('eurreur ' + err);;
     });