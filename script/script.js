function ConstructCity(name, population, area, country) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.country = country;
}

var odessa = new ConstructCity("Одеса", 1000000, 236, "Україна");
var kyiv = new ConstructCity("Київ", 2800000, 839, "Україна");

console.log(odessa);
console.log(kyiv);