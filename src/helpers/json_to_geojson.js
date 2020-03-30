import fs from "fs"
import clinics from "../data/allClinics.json"

var geojson = {
    type: "FeatureCollection",
    features: [],
  };
export const conversion = () =>{
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
            "place_id": clinics[i].place_id,
            "key_id" : i
          }
        });
    }
    toFile()
} 

const toFile = () =>{
    fs.appendFile("clinics.geojson", geojson,(err)=>{
        if (err) throw err;
    })
}


