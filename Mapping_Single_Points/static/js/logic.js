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
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.

// Dark map view: 
    // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // We create the dark view tile layer that will be an option for our map.
    let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Center of the Earth:
// let map = L.map('mapid').setView([30, 30], 2);

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark,
    Light: light
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]
// };

// Add it to the map:
// L.geoJSON(sanFranAirport).addTo(map);

    // OR
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + "</h2>");        
//     }
// }).addTo(map);

    // OR
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup();       
//     }
// }).addTo(map);

// Our options to add data to a marker are to use the
    // pointToLayer or onEachFeature callback functions. 
    // For the pointToLayer callback function, we are first going to call a function() 
    // where we pass each GeoJSON feature and its latitude and longitude.
    // Then we add a marker for each feature in a return statement.

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
  
// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow",
//     dashArray: "30 10",
//     weight: 5,
//     opacity: 0.5
//   }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// // Instead of 'marker', add an array containing each city's location, state, and population.
// ((((We can also reference 'cities' in another file))))

// Get data from cities.js
let cityData = cities;

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/pizzahut111/Earthquakes/Mapping_GeoJSON_Points/torontoRoutes.json";

// Accessing the airport GeoJSON URL (which can be generated directly on GitHub by clicking on a .json file you've pushed and viewed 'raw')
let airportData = "https://raw.githubusercontent.com/pizzahut111/Earthquakes/main/majorAirports.json";

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

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// Add a circle to the map for LA, CA
// L.circleMarker([34.0522, -118.2437], {
//     radius: 30,
//     color: "black",
//     fillColor: 'light-yellow'
//  }).addTo(map);

// Puts markers for all json objects in 'airportData' (here 'data' references 'airportData')
// d3.json(airportData).then(function (data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data)
//         .bindPopup(function (layer) {
//             return layer.feature.properties.name;
//         })
//         .addTo(map);
// });

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Toronto flights
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
                + feature.properties.dst + "</h3>");
        }
    })
    .addTo(map);
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