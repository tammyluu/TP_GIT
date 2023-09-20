let users = [
    {
        id : 1,
        name : 'Père de Noel'
    },
    {
        id : 2,
        name : 'Mère de Noel'
    },
    {
        id : 3,
        name : 'Children'
    }
];
let comments = [
    {
        id: 1,
        user_id : 1,
        content : "What do  you like for a gift? "
    },
    {
        id: 2,
        user_id : 3,
        content : "I love to have a pet "
    },
    {
        id: 3,
        user_id : 1,
        content : "Which pet do you prefer? "
    }
];
//1. Récupérer une commentaire
//2. Récupérer user_Id à partir d'une commentaire
//3. Récupérer userà partir d'un user_id
//Callback Hell => Promise Hell (bi phu thuoc nhau qua nhieu)
// 1. Array 2. Function & Callback 3. Promise 4.DOM

 // Fake API

 function getComments() {  
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve(comments);
        },1000);
    });
 }
 function getUsersByIds(userIDs){
    return new Promise(function(resolve){
        let result = users.filter(function(user){
            return userIDs.includes(user.id)
        });
        setTimeout(function(){
            resolve(result);
        },1000);
        resolve(result);
    },)

 }
 getComments()
   .then (function(comments){
        console.log(comments);
         let userIDs = comments.map(function(comment){
           return comment.user_id;
       });
        getUsersByIds(userIDs)
        .then(function (users) {
            //console.log(users);
            return {
                users : users,
                comments : comments,
            };
        })
        
        .then (function(data){
            //console.log(data);
            let commentBlock = document.getElementById('comment-block');
            let html = '';
            data.comments.forEach(function(comment) {
                let user =data.users.find(function(user){
                    return user.id === comment.user_id;
                });
                html += `<li>${user.name} : ${comment.content}</li>`;
            });
            commentBlock.innerHTML = html;
        });
 });


