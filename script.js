const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    const form = document.querySelector("form")
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        //event.preventDefault()
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
        } 
        if (validateInput(pilot) == "Is a Number") {
            alert("Please enter a name, not a number, for Pilot Name")
        }
        if (validateInput(copilot) == "Is a Number") {
            alert("Please enter a name, not a number, for Co-pilot Name")
        }
        if (validateInput(fuelLevel) == "Not a Number") {
            alert("Please enter a number for 1028(L)")
        }
        if (validateInput(cargoLevel) == "Not a Number") {
            alert("Please enter a number for Cargo Mass (kg)")
        } 
        
        //event.preventDefault()
    })


    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.imageUrl;
        let planet = pickPlanet(listedPlanets)
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
    
 });