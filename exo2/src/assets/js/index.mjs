const contacts = [];
let contactCount = 0;
const contactForm = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    if (firstName && lastName && email && phone) {
        const contact = {
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
function displayContact(contact) {
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
    const deleteButton = contactItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        contacts.splice(contacts.findIndex(c => c.id === contact.id), 1);
        contactList?.removeChild(contactItem);
    });
}
contacts.forEach(displayContact);
export {};
