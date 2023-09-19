import { Vehicule } from "./js/Vehicule.js";

let vehicle = new Vehicule("AA-456-ZY");
let parking = [];
//console.table(parking.push(vehicle));

const bntTicket = document.getElementById('bntTicket');

bntTicket.addEventListener("click", () =>{
 const newInput = document.getElementById('licence');
 const licenceInput = newInput.value.trim();
  
 if (licenceInput !== "") {
    let inTime = new Date();
    parking.push(licenceInput); 
    parking.push(inTime); 
    console.log(licenceInput);
    console.table(parking);
    const ticketdisplay = document.createElement('p');
        ticketdisplay.className = 'bill-vehicle d-flex justify-content-between align-items-center';
        ticketdisplay.textContent = ` Veuillez prendre votre ticket pour le véhicule ${licenceInput}`;
    //parking.display();
    newInput.value = "";
    } else{
        const ticketdisplay = document.createElement('p');
        ticketdisplay.className = 'bill-vehicle d-flex justify-content-between align-items-center';
        ticketdisplay.textContent = `  le véhicule ${licenceInput} n'existe pas`;
    }
     
}) 


        
 

// console.log(date);
// setInterval (() => {
//   console.log(new Date())
// }, 3000)

// setTimeout (() =>{
//   console.log(new Date());
// },3000)