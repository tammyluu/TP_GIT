/*
--------- DOM---------
*/
const h1DOM =document.createElement('h1');
h1DOM.title = "Welcome!"
h1DOM.className = "heading";
h1DOM.innerHTML ="Hello guys!!!!";
document.body.appendChild(h1DOM);
/*
--------- React---------
*/
const h1React = React.createElement('h1',{
    title : "hello",
    className : ''
},'hey you!');
console.dir(h1DOM);
cgl
