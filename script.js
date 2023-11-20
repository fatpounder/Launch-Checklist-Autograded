//const { myFetchFunction, pickPlanetFunction, formSubmissionFunction } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let list = document.getElementById("faultyItems")
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        //event.preventDefault()
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
        return alert("All fields are required!")
        }
        if (validateInput(pilot.value) === "Is a Number") {
        return alert("Make sure to enter valid information for each field!")
        } 
        if (validateInput(copilot.value) === "Is a Number") {
        return alert("Make sure to enter valid information for each field!")
        } 
        if (validateInput(fuelLevel.value) === "Not a Number") {
        return alert("Make sure to enter valid information for each field!")
        } 
        if (validateInput(cargoLevel.value) === "Not a Number") {
        return alert("Make sure to enter valid information for each field!")
        }
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
    })
    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);

        let planet = pickPlanet(listedPlanets)
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let image = planet.image;
       
        addDestinationInfo(document, name, diameter, star, distance, moons, image)
    })

 });