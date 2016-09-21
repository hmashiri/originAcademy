var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];


var select = document.getElementById('selectPlanet');

for(var j=0; j< planets.length; j++){
var opt = document.createElement('option');
    opt.innerHTML = planets[j].planet;
    opt.value = planets[j].gravity;
    select.appendChild(opt);        
}




function weightCalculator() {
  var weightInput = document.getElementById('astroWeight').value;
  var planetIndex = document.getElementById('selectPlanet').selectedIndex;
  var planetGravity = planets[planetIndex].gravity;
  var planetName = planets[planetIndex].planet;
  var result = weightInput * planetGravity;
  document.getElementById('resulttext').innerHTML = "If you're on " + planetName + ", you would weigh " + result + "lbs";

}


function reversedString(string) {
  var string = document.getElementById('astroTitle')
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--){
  reverse += string[i]  }
  document.getElementById('astroTitle').innerHTML = reverse;

}
