const cat = document.getElementById("cat");
const surprise = document.getElementById("surprise");

cat.addEventListener("click", () => {
  surprise.classList.remove("hidden", "visible");

  // force reflow so animation restarts
  void surprise.offsetWidth;

  surprise.classList.add("visible");
});