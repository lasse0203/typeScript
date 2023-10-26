import Contact from "./User.js";

const contacts: Contact[] = [];
let contactCount = 0;
const contactForm = document.getElementById("contact-form") as HTMLFormElement;
const contactList = document.getElementById("contact-list");


contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    if (firstName && lastName && email && phone) {
        const contact: Contact = {
            id: contactCount,
            firstName,
            lastName,
            email,
            phone
        };
        contacts.push(contact);
        contactCount++;
        displayContact(contact);
        contactForm.reset();
    }
});


function displayContact(contact: Contact) {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");
    contactItem.innerHTML = `
        
        <span>Prénom: ${contact.firstName}</span>
        <span>Nom: ${contact.lastName}</span>
        <span>Email: ${contact.email}</span>
        <span>Téléphone: ${contact.phone}</span>
        <button class="delete-button" data-id="${contact.id}">Supprimer</button>
    `;
    contactList?.appendChild(contactItem);

    
    const deleteButton = contactItem.querySelector(".delete-button") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => {
        contacts.splice(contacts.findIndex(c => c.id === contact.id), 1);
        contactList?.removeChild(contactItem);
    });
}
contacts.forEach(displayContact);
