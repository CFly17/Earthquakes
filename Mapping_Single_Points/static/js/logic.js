// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// We're assigning the variable map to the object L.map(),
    // and we instantiate the object with the given string 'mapid'.
    // The mapid will reference the id tag in our 
    // <div> element on the index.html file.
    // The setView() method sets the view of the map with 
    // a geographical center, where the first coordinate is 
    // latitude(40.7) and the second is longitude(-94.5).
    // We set the zoom level of "4" on a scale 0–18.
    let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow",
    dashArray: "30 10",
    weight: 5,
    opacity: 0.5
  }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// // Instead of 'marker', add an array containing each city's location, state, and population.
// ((((We can also add this to another file))))

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: (city.population -200000) / 100000,
        lineWeight: 4,
        color: 'orange'
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// Add a circle to the map for LA, CA
// L.circleMarker([34.0522, -118.2437], {
//     radius: 30,
//     color: "black",
//     fillColor: 'light-yellow'
//  }).addTo(map);

// We create the tile layer that will be the background of our map.

// Dark map view: 
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// To change the map's style, change the map id
// using the list of Mapbox ids below:
// (link here: https://docs.mapbox.com/api/maps/styles/)
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);