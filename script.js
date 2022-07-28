// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let list = document.querySelector("#faultyItems");

    let pilot= document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();

   let listedPlanets = myFetch;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let otherWordly = pickPlanet(listedPlanets)
       addDestinationInfo(document, otherWordly.name, otherWorldly.diameter, otherWorldly.star, otherWorldly.distance, otherWorldly.moons, otherWorldly.image)
   }) 
});