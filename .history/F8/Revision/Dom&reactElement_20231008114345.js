/*
--------- DOM---------
create <h1 title = "hello" class = "heading"> Hello guys!!!! </h1>
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
//DOM
const ulDom = document.createElement('ul')
ulDom.id = "tab"
ulDom.style = 'color : red ; font-size : 30px'
const liDom1 = document.createElement('li')
liDom1.innerText= 'Javascript'
liDom1.id = "liDom-1"

ulDom.appendChild(liDom1)
const liDom2 = document.createElement('li')
liDom2.innerText = 'React'
ulDom.appendChild(liDom2)

document.body.appendChild(ulDom)
//React
const ulReact = React.createElement(
    'ul',
    {
        id: 'ul-id',
        style : 'color : red ; font-size : 30px'
    },
    React.createElement('li',null,'JavaScript'),
    //React.createElement('li',{id:'liDom-1},'JavaScript'),
    React.createElement('li',null, 'ReactJS'),
)// khi thuc hien create from 2 elelments (2 li) tro len thi se become Array
console.log(ulReact);
/*
<div class="post-item">
    <h2 title= "Learn React at F8">Learning REACT</h2>
    <p>Learning REACT From A to Z</p>
</div>    
 */
const postItem = React.createElement(
    'div', {className : 'postItem'},
    React.createElement(
        'h2',{ title : 'Learn React at F8'}, 'Learning REACT'
    ),
    React.createElement('p',{},'Learning REACT From A to Z')
)
console.log(postItem);
/*--------Render UI ------------- */
//Get root element
const root = document.getElementById('root')
// React -DOm => render UI
ReactDOM.render(postItem,root)
const App(){
    let fAccess = true
    return (
        <div id ="wrapper">
            {fAccess && <h1>Welcome to F8</h1>}
        </div>
    )
}

