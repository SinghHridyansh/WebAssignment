const change = (e) => {
  const text = document.getElementById("text-display");
  const value = e.target.value;
  text.innerHTML = value;
};
document.getElementById("inputbox").addEventListener("input", change);
