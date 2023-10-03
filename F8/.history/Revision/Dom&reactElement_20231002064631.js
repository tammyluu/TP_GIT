/*
--------- DOM---------
create <h1 title = "hello" class = "heading"> Welcome! </h1>
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
    className : 'title'
},'hey you!');
console.dir(h1DOM);
console.log(h1React);
/*
--------Exo DOMElemnent vs REACT DOM
React.creatElement(type,props,children,n) 
props: nhung gi chua trong obj h1React
children == 1 props
*/
/* create <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
            </ul> */

const ulDom = document.createElement('ul')
const liDom1 = document.createElement('li')
liDom1.innerText= 'Javascript'
document.appendChild(liDom1)
const liDom2 = document.createElement('li')
liDom2.innerText = 'React'
document.ap
