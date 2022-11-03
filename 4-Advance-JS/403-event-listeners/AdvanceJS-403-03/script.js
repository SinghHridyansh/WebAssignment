document.querySelector("#calculate").onclick = calculate;

function calculate() {
  let amount = document.querySelector("#amount").value;
  let persons = document.querySelector("#persons").value;
  let service = document.querySelector("#services").value;

  console.log(service);

  if (amount === "" && service === "Select") {
    alert("Please enter valid values");
    return;
  }
  if (persons === "1") {
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }

  let total = (amount * service) / persons;
  document.querySelector(".tip").style.display = "block";
  document.querySelector("#total").innerHTML = total;
}
