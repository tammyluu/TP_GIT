import Contact from "./classes/Contact.js";


const contacts: Contact[] = [
  new Contact("Albert", "DUPONT", new Date("1985-10-25"), "a.dupont@example.com", "+33 123 456 789", ""),
  new Contact("Hélène", "DUPONT", new Date("1988-06-27"), "h.dupont@example.com", "+33 147 654 852", ""),
  new Contact("John", "SMITH", new Date("1992-04-14"), "j.smith@example.com", "+32 158 943 225", ""),
  new Contact("Clara", "GOMEZ", new Date("1967-09-13"), "c.gomez@example.com", "+33 146 997 254", ""),
  new Contact("Elizabeth", "MARTIN", new Date("1964-02-22"), "e.martin@example.com", "+33 119 788 254", "")
]


console.table(contacts)

const contactsContainer = document.getElementById("contactsContainer") as HTMLDivElement

let  selectedContact = contacts[0]

const refeshContactContainer = ()=>{
  console.log(("mettre les contacts de mon tableau dans mon DOM"));
  contactsContainer.innerHTML = ""

  contacts.forEach(contact => {
    const newButton = document.createElement("button");
    newButton.textContent = contact.fullname
    newButton.className =contact === selectedContact ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2"
    newButton.addEventListener ('click', () =>{
      selectedContact = contact
      refeshContactContainer()
      refeshContactInfos()
    })
    contactsContainer.appendChild(newButton)
  })
 
}
const refeshContactInfos = () => {
  console.log("afficher tous les détails d'un contact");
  console.log(selectedContact);
  const firstname = document.querySelector('#details-firstname')
  const lastname = document.querySelector('#details-lastname')
  const dateOfBirth = document.querySelector('#details-dateOfBirth')
  const age = document.querySelector('#details-age')
  const email = document.querySelector('#details-email')
  const phoneNumber = document.querySelector('#details-phoneNumber')

  firstname.value = selectedContact ? selectedContact.firstname : ""
  lastname.value = selectedContact ? selectedContact.lastname : ""
  dateOfBirth.value = selectedContact ? selectedContact.dateOfBirth.toLocaleDateString() : ""
  age.value = selectedContact ? `${selectedContact.age}yo`: ""
  email.value = selectedContact ? selectedContact.email : ""
  phoneNumber.value = selectedContact ? selectedContact.phoneNumber: ""
  

}
// closeAddContactCross.addEventListener('click', ()=>{
//   addContactModel.style.display = "none"
// })
// btnDeleteContact.addEventListener('click', () =>{
//   if(confirm("are you sure?")) {
//     contacts.slice(contacts.indexOf(selectedContact),1)//decouper un element de mon tableau (supprimer)
//     selectedContact =undefined; //le contact  contacts.indexOf(selectedContact) devient undefined , 1 est choisir just un élément
//     refeshContactContainer()
//     refeshContactInfos()
//   }
// })
refeshContactContainer()
refeshContactInfos()
