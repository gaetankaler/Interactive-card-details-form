const submit = document.querySelector(".confirm");

submit.addEventListener("click", defaultprevent);

function defaultprevent(event) {
  event.preventDefault();
}
