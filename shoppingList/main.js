console.log("Local Storage")


const list = {}
    

//localStorage.setItem("list", JSON.stringify(list))
//localStorage.setItem("list1", JSON.stringify(list))
let listStorage = JSON.parse(localStorage.getItem("list"))

//console.log(listStorage.categorie1);

const newCat = document.querySelector('#newList');
const btnValidate = document.querySelector('#addList');
const display = document.querySelector('#displayList');
const lists = new Array();
console.log(lists.length)

btnValidate.onclick = () => {
    console.log("appuyé");
    // for ( let i = 0; i <= list.lenght; i++){
    //     listStorage[i] = JSON.parse(localStorage.getItem("list"));
    //     console.log(listStorage)
    //     display.innerHTML= `${listStorage[i]}`
    // console.table(lists);
    
    // }
    if (newCat !== ''){
        lists.push(newCat.value);
        console.log(lists)
      //  display.appendChild= `${lists[lists.length-1]}`
      //  localStorage.setItem("list",JSON.stringify(list))
        
    }else{
        alert('error')
    }
    
newCat.value = '';


}
