document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector('#ins-form');
    const inputElement = document.querySelector('#name-input');
    const input1Element = document.querySelector('#fName-input');
    const submitBut = document.querySelector('#submit-button');
    if (submitBut) {
        submitBut.addEventListener("click", () => {
            const firstName = input1Element.value;
            const lastName = inputElement.value;
            if (firstName && lastName) {
                console.log(`Bonjour ${firstName} ${lastName} !`);
            }
        });
    }
});
export {};
