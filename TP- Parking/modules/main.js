import { Vehicule } from "./js/Vehicule.js";

//const licenceInput = document.getElementById('licence');
const bntTicket = document.getElementById('bntTicket');

bntTicket.addEventListener("click", () =>{
 const newInput = document.getElementById('licence');
 const licenceInput = newInput.ariaValueMax.trim();
 console.log(licenceInput);
 if (licenceInput) {
    //const vehicle = new Vehicule ( licenceInput);
        addVehicule()
        //this.vehicles.push(vehicle);
        licenceInput.textContent = newInput;
        console.log(newInput);
        newInput = "";
 }
})

