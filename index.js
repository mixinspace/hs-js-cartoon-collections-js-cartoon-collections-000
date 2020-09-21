function dwarfRollCall(dwarves) {
  const dwarfNames = []
 for (let i = 0; i < dwarves.length; i++){
   dwarfNames.push(`${i+1}. ${dwarves[i]} `)
 }
 return `${dwarfNames.join('')}`
}

function summonCaptainPlanet(planeteerCalls) {
   var planeteerArray = [];
   for (var i = 0; i < planeteerCalls.length; i++) {
     planeteerArray.push(planeteerCalls[i].toUpperCase() + "!");

   }
     return planeteerArray;
 }

 function longPlaneteerCalls(word) {
    var calls = [];
    for (var i = 0; i < word.length; i++) {
      calls = word[i];
      if (calls.length > 4) {
        return true;
      } else {
        return false;
      }
    }
  }


  function findTheCheese(food) {
     for (var i = 0; i < food.length; i++) {
       if (food[i] == "cheddar") {
         return "cheddar";
       } else if (food[i] == "gouda") {
         return "gouda";
       } else if (food[i] == "camembert") {
         return "camembert";
       }
     }
     return "no cheese!";
   }
