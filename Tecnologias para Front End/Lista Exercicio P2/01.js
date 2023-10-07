let cityA = 80000;
let taxA = 0.03;
let cityB = 200000;
let taxB = 0.015;
let anos = 0;

while (cityA < cityB) {
    cityA += cityA * taxA;
    cityB += cityB * taxB;
  anos++;

}

console.log(anos)