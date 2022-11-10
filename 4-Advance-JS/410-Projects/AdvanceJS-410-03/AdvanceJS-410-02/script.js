document.getElementById("search").addEventListener("keyup", renderData);

function renderData(e) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
  )
    .then(convertToJSON)
    .then(showData);
}

function showData(data) {
  document.getElementById("result").innerHTML = "";
  console.log(data.meals);
  data.meals.map((item) => {
    let image = document.createElement("img");
    image.src = item.strMealThumb;
    document.getElementById("result").appendChild(image);
  });
}

function convertToJSON(response) {
  return response.json();
}