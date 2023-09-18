// const openModalButton = document.querySelector("#open-modal");
// const closeModalButton = document.querySelector("#close-modal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");

// const toggleModal = () => {
//   modal.classList.toggle("hide");
//   fade.classList.toggle("hide");
// };

// [openModalButton, closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => toggleModal());
// });


const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = () => {
    modal.showModal()
}

buttonClose.onclick = () => {
    modal.close()
}