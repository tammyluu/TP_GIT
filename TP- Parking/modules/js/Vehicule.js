export class Vehicule {
    constructor (){
        this.licence = licence;
        
        //this.cpt = 0;
      
    }
    toString(){
        return `${this.brand} - ${this.model} - ${this.mileage}Km - ${this.year}`
    }
    display(){
        const ticketdisplay = document.createElement('p');
        ticketdisplay.className = 'licence-vehicle d-flex justify-content-between align-items-center';
        ticketdisplay.textContent = document.getElementById('licence').value;
    }
    // addVehicle(){
    //     const licencePlate = document.getElementById('licence');
    //     const vehicle = new Vehicule (this.cpt++, licencePlate);
    //     this.vehicles.push(vehicle);
    //     console.log(vehicle);
        
    // }
    
    getTicket (){
        const ticket = document.getElementById('licence');
        ticket = `Veuillez prendre votre ticket pour le véhicule ${licencePlate}`
        console.log(ticket)
        //effacez la liste actuelle
        ticket.innerHTML = '';
        

    }
}