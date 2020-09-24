function dwarfRollCall(dwarves) {
    // Output variable initialisation
    var dwarfNames = [];

    // For loop to iterate over each element of given array.
    for (let i = 0; i < dwarves.length; i++) {
        // push method adds an item at the last to an array type variable.
        // '+' could be used to add two strings.
        dwarfNames.push(i + 1 + ". " + dwarves[i] + " ")
    }

    // Return the output
    return dwarfNames.join("");
}

function summonCaptainPlanet(planeteerCalls) {
    // Output variable initialisation
    var planets = [];

    // For loop to iterate over each element of given array.
    for (let i = 0; i < planeteerCalls.length; i++) {
        // push method adds an item at the last to an array type variable.
        planets.push(planeteerCalls[i].toUpperCase() + "!")
    }

    // Return the output
    return planets;
}

function longPlaneteerCalls(words) {
    // Output variable initialisation
    var state = false;

    // For loop to iterate over each element of given array.
    for (let i = 0; i < words.length; i++) {
        // 'string' length method returns the character count of the word.
        if (words[i].length > 4) {
            // Overwrite the output variable based on the condition.
            state = true;
        }
    }

    // Return the output
    return state;
}

function findTheCheese(foods) {
    // Output variable initialisation
    var state = "no cheese!";

    // For loop to iterate over each element of given array.
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === "cheddar") {
            // Overwrite the output variable based on the condition.
            // break stops the loop and jumps on to the next line of the code.
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

    // Return the output
    return state;
}
