let form = document.getElementById("form");
let input = document.getElementById("input");
let element = document.getElementById("element");
let item = document.getElementById("item");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  checkFormValidation();
});

let checkFormValidation = function () {
  console.log(input.value);
  if (input.value != "") {
    console.log("success");
    element.innerText = "";
    acceptData();
  }
  else {
    console.log("failure");
    element.innerText = "Add some items!";
  }
};

let data = {};

let acceptData = function () {
  data["text"] = input.value;
  console.log(data);
  showitem();
};

let showitem = function () {
  item.innerHTML += ` <div class="options">
    <p>${data.text}</p>
    <span >
    <button class="deletebutton" onClick="deleteitem(this)">Delete</button>
    </span>
  </div>`;
  input.value = "";
};

let deleteitem = function (e) {
  e.parentElement.parentElement.remove();
  console.log("delete", e.parentElement.parentElement);
};