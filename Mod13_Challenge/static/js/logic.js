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
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for LA, CA
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: 'light-yellow'
 }).addTo(map);

// We create the tile layer that will be the background of our map.

// Dark map view: 
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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