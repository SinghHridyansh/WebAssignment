 let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let Btn = document.getElementById("add");

Btn.addEventListener("click", validate);

function validate() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    country.value == "" ||
    score.value == ""
  ) {
    document.getElementById("warn").innerText = "=Add the required data";
  } else {
    document.getElementById("warn").innerText = "";
    addData();
  }
}

function addData() {
  document.getElementById("show").innerHTML += `<div class="result">
    <div class="first">
      <p class="p">${firstName.value} ${lastName.value}</p>
    </div>
    <div class="cname">
      <p>${country.value}</p>
    </div>
    <div class="scores">
      <p>${score.value}</p>
    </div>
    <div class="delete">
      <div class="del icon" onclick="deleteData(this)">
        <i class="fa-regular fa-trash-can" ></i>
      </div>
      <div class="del" onclick="IncreementData(this)">
        <p>+5</p>
      </div>
      <div class="del" onclick="DecData(this)">
        <p>-5</p>
      </div>
    </div>
  </div>`;
}

function deleteData(e) {
  e.parentElement.parentElement.remove();
}

function IncreementData(e) {
  e.parentElement.previousElementSibling.children[0].innerText =
    parseInt(e.parentElement.previousElementSibling.children[0].innerText) + 5;
}
function DecData(e) {
  e.parentElement.previousElementSibling.children[0].innerText =
    e.parentElement.previousElementSibling.children[0].innerText - 5;
}
