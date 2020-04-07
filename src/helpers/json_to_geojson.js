var fs = require("fs")
var clinics = require ("../data/medicalClinics.json")

var geojson = {
    type: "FeatureCollection",
    features: [],
  };
function conversion() {
    console.log(clinics.length)
    for (i = 0; i < clinics.length; i++) {
        geojson.features.push({
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [clinics[i].lng, clinics[i].lat]
          },
          "properties": {
            "name": clinics[i].name,
            "formatted_address": clinics[i].formatted_address,
            "lat" : clinics[i].lat,
            "lng" : clinics[i].lng,
            "place_id": clinics[i].place_id,
            "key_id" : i,
            "icon" : "hospital"
          }
        });
        
    }
    toFile()
    
} 

function toFile() {
    var data=JSON.stringify(geojson)
    fs.appendFile("mclinics.geojson", data,(err)=>{
        if (err) throw err;
    })
}
conversion()

 