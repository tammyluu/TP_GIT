// Back-enk --> API(ULR) --> Fetch  --> JSON/XML

let postAPi = 'https://jsonplaceholder.typicode.com/posts'
fetch (postAPi)
    .then(function(response){
        return response.json();
        // JSON.parse : JSON -> JS types
    })
    .then (function(posts){
        console.log(posts);
        //render on page HTML
        let htmls = posts.map( function (post){
            return  `<li>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </li>`;
        }) ; // map: récuperer  un arry qui tient nbr éléments corresponse (= nbr éléments de posts)
        // return a string
            let html = htmls.join('');
            document.getElementById('post-block').innerHTML = html;
        })
    .catch (function (err) {
         console.log(err);;
     });