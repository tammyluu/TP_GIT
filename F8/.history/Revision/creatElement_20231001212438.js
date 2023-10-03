const h1 = document.querySelector('#heading');
console.dir(h1);

const h2 = document.createElement('h2');
h2.innerHTML = 'Glassed to meet you!!!!'
console.log(h2);
// luc này h2 chi trong bo nho thoi
document.body.appendChild(h2);

const root = document.getElementById('root');
root.appendChild(h2)