//const { myFetch, pickPlanet, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    // const form = document.querySelector("form")
    // form.addEventListener("submit", function(event) {

    //     let pilot = document.querySelector("input[name=pilotName]");
    //     let copilot = document.querySelector("input[name=copilotName]");
    //     let fuelLevel = document.querySelector("input[name=fuelLevel]");
    //     let cargoLevel = document.querySelector("input[name=cargoMass]");
    //     event.preventDefault()
    //     formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)

    //     if (pilot.value === "Empty" || copilot.value === "Empty" || fuelLevel.value === "Empty" || cargoLevel.value === "Empty") {
    //         alert("All fields are required!");
    //     } 
    //     if (pilot.value == "Is a Number") {
    //         alert("Please enter a name, not a number, for Pilot Name")
    //     }
    //     if (copilot.value == "Is a Number") {
    //         alert("Please enter a name, not a number, for Co-pilot Name")
    //     }
    //     if (fuelLevel.value == "Not a Number") {
    //         alert("Please enter a number for 1028(L)")
    //     }
    //     if (cargoLevel.value == "Not a Number") {
    //         alert("Please enter a number for Cargo Mass (kg)")
    //     }      
    // })


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
    const form = document.querySelector("form")
     form.addEventListener("submit", function(event) {

         let pilot = document.querySelector("input[name=pilotName]");
         let copilot = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoLevel = document.querySelector("input[name=cargoMass]");
         event.preventDefault()
         formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)

         if (pilot.value === "Empty" || copilot.value === "Empty" || fuelLevel.value === "Empty" || cargoLevel.value === "Empty") {
             alert("All fields are required!");
         } 
         if (pilot.value == "Is a Number") {
             alert("Please enter a name, not a number, for Pilot Name")
         }
         if (copilot.value == "Is a Number") {
             alert("Please enter a name, not a number, for Co-pilot Name")
         }
         if (fuelLevel.value == "Not a Number") {
             alert("Please enter a number for 1028(L)")
         }
         if (cargoLevel.value == "Not a Number") {
             alert("Please enter a number for Cargo Mass (kg)")
         }      
     })
    

 });