const h1 = document.querySelector('#heading');
console.dir(h1);

const h2 = document.createElement('h2');
h2.innerHTML = 'Glassed to meet you!!!!'
console.log(h2);
// luc này h2 chi trong bo nho thoi
document.body.appendChild(h2);// muon add no o dau thi goi ten cho mon add, o day minh muon them vao phan body

const root = document.getElementById('root');
root.appendChild(h2);
/*
*******thêm thuoc tinh property & attribute*******
 */
// add Text
h2.innerText = "How're you";
h2.id = 'heading2';
h2.className ='test class-2'//className là property trong JS node/ JS element
h2.style.color = 'red'
h2.style ='color : green; font-size : 40px';
Object




