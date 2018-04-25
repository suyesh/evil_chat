import { sendMessage } from "client/chat";
import "./message-form.css";

function submitMessage(input) {
  sendMessage(input.value);

  // eslint-disable-next-line
  input.value = "";
  input.focus();
}

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  // You can send a message with cmd/ctrl+enter
  input.addEventListener("keydown", event => {
    if (event.keyCode === 13 && event.metaKey) {
      event.preventDefault();
      submitMessage(input);
    }
  });

  // Or by clicking a button

  submit.addEventListener("click", event => {
    event.preventDefault();
    submitMessage(input);
  });
}
