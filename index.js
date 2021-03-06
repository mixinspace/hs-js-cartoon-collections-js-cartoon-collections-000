function dwarfRollCall(dwarves) {
    var dwarfNames = [];
    for (let i = 0; i < dwarves.length; i++) {
        dwarfNames.push(i + 1 + ". " + dwarves[i] + " ")
    }

    return dwarfNames.join("");
}

function summonCaptainPlanet(planeteerCalls) {
    var planets = [];
    for (let i = 0; i < planeteerCalls.length; i++) {
        planets.push(planeteerCalls[i].toUpperCase() + "!")
    }
    return planets;
}

function longPlaneteerCalls(words) {
    var state = false;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
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
