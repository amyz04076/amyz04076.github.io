import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;
let circles = [];

const width = 800;
const height = 600;
const maxCircles = 10;

async function prepareVis() {
  svg = d3
    .select("#visContainer")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid #88a6ff");


  svg.on("click", function (event) {
    if (circles.length >= maxCircles) return;

    const [x, y] = d3.pointer(event);

    const circle = svg
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 15)
      .attr("fill", "#88a6ff");

    circles.push(circle);
  });
}

async function drawVis() {
  // No default circle needed now
}

async function runApp() {
  await prepareVis();
  await drawVis();
}

runApp();