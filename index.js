function dwarfRollCall(dwarves) {
  var name = [];
  for (var i = 0; i < dwarves.length; i++) {
    name.push(i + 1 + ". " + dwarves[i] + " ");
  }
  return name.join("");
}


function summonCaptainPlanet(planeteerCalls) {
  var planets = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planets.push(planeteerCalls[i].toUpperCase() + "!")
  }
  return planets;
}

function longPlaneteerCalls(words) {
    var state = false;
    for (var i = 0; i < words.length; i++) {
      if (words.length > 4) {
        state = true;
      }

    }
    return state;
}

function findTheCheese(foods) {
    var state = "no cheese!";
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === "cheddar") {
            state = foods[i];
            break;
        } else if (foods[i] === "gouda") {
            state = foods[i];
            break;
        }
        else if (foods[i] === "camembert") {
            state = foods[i];
            break;
        }
    }
    return state;
}

// words with b
// [max, henna, bob, ben, am]
function wordWithB(words){
  var state = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startWith("B")) {
      state.push(words[i]);
    }
  }
  return state;
}
