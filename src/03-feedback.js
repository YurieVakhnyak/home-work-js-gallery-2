import "./css/common.css";
import "./css/03-feedback.css";

const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", saveDataForm);

function saveDataForm(evt) {
  evt.preventDefault();
  const savedDataObject = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  const savingData = JSON.stringify(savedDataObject);
  localStorage.setItem(LOCALSTORAGE_KEY, savingData);

  console.log(`Data from Storage: ${savedData}`);
}

let dataFromStorage = localStorage.getItem(LOCALSTORAGE_KEY);
const savedData = JSON.parse(dataFromStorage);

window.onload = function () {
  if (savedData.email.length !== 0) {
    form.elements.email.value = savedData.email;
    console.log(savedData.email);
  }
  if (savedData.message.length !== 0) {
    form.elements.message.value = savedData.message;
    console.log(savedData.message);
  }
};

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
  console.log(savedData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
});
