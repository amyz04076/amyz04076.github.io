//make the cat say :3
const cat = document.getElementById("cat");
const surprise = document.getElementById("surprise");

cat.addEventListener("click", () => {
  surprise.classList.remove("hidden", "visible");

  void surprise.offsetWidth;

  surprise.classList.add("visible");
});

//function to create a flower
function createFlower() {
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const petals = [
    { x: 0, y: 10, color: "#FFD0EA" },
    { x: 10, y: 0, color: "#FFD0EA" },
    { x: 20, y: 10, color: "#FFD0EA" },
    { x: 10, y: 20, color: "#FFD0EA" },
    { x: 10, y: 10, color: "#FFF8D0" },
    { x: 0, y: 0, color: "#53893A" },
  ];

  //set location and  for each petal
  petals.forEach((p) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", p.x);
    rect.setAttribute("y", p.y);
    rect.setAttribute("width", 10);
    rect.setAttribute("height", 10);
    rect.setAttribute("fill", p.color);
    g.appendChild(rect);
  });

  return g;
}
//flower data
const data = [
  { month: "Jan", flowers: 2 },
  { month: "Feb", flowers: 5 },
  { month: "Mar", flowers: 3 },
  { month: "Apr", flowers: 0 },
  { month: "May", flowers: 1 },
  { month: "Jun", flowers: 6 },
  { month: "Jul", flowers: 1 },
  { month: "Aug", flowers: 3 },
  { month: "Sep", flowers: 1 },
  { month: "Oct", flowers: 2 },
  { month: "Nov", flowers: 0 },
  { month: "Dec", flowers: 2 },
];
const svg = document.getElementById("vis");

const flowerSize = 30; //size of each flower
const flowerGap = 8; //distance between each flower
const monthGap = 60; //distance between the bars

const chartBottom = 350; //bottom of the chart 
const startX = 50; //x position for graph start

//add the flowers
data.forEach((d, monthIndex) => {
  for (let i = 0; i < d.flowers; i++) {
    const flower = createFlower();
    const x = startX + monthIndex * monthGap; //flower x position
    const y = chartBottom - (i + 1) * (flowerSize + flowerGap); //calculation for flower y position

    flower.setAttribute("transform", `translate(${x}, ${y})`); //translate each flower to its spot

    svg.appendChild(flower);
  }
});

//month labels
data.forEach((d, i) => {
  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.textContent = d.month;
  label.setAttribute("x", startX + i * monthGap + flowerSize / 2);
  label.setAttribute("y", chartBottom + 20);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("class", "label");
  label.setAttribute("fill", "#224e0e");
  svg.appendChild(label);
});
