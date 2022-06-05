// Add console.log to check to see if our code is working.
console.log("working");

// ======================================================

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // An alternative to using the setView() method is to 
// //modify each attribute in the map object 
// // using the curly braces notation as follows:


// // Create the map object with a center and zoom level.

//         let map = L.map("mapid", {
//             center: [
//             40.7, -94.5
//             ],
//             zoom: 4
//         });


//         // This method is useful when we need to add 
//         // multiple tile layers, or a background image of our map(s),

// ======================================================

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // add the id attribute and assign it mapbox/streets-v11, 
    // which will show the streets on the map.
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // add the accessToken attribute and assign it the value of our API_KEY
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);