// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
               let
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === " ") {
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a number";
    } else {
        return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   list = document.querySelector("#faultyItems");
   pilot = document.querySelector("input[name=pilotName]").value;
   copilot = document.querySelector("input[name=copilotName]").value;
   fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   cargoLevel = document.querySelector("input[name=cargoLevel]").value;
   
   let pilotStatus = document.getElementById("piloStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let liftOff = true;

   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required");
    } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoLevel) === "Not a number") {
    alert("Values must contain numbers.");
    } else if ((validateInput(pilot) === "Is a number") || validateInput(copilot) === "Is a number") {
    alert("Values must contain letters.")    
    }

    function weAreReady() {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
    };
    
   if (fuelLevel < 10000) {
        liftOff = false
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
   } else {
       fuelStatus.innerHTML = "There is enough fuel for the journey";   
   }

   if (cargoLevel > 10000) {
        liftOff = false;
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
   } else {
        cargoStatus.innerHTML = "Mass is low enough for the shuttle to take off";
   };

   if (liftOff) {
    launchStatus.innerHTML =  "Shuttle is ready for launch";
    launchStatus.style.color = "green";
    weAreReady();
   } else {
    launchStatus.innerHTML =  "Shuttle is not ready for launch";
    launchStatus.style.color = "red";
    weAreReady();
   }
};
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
