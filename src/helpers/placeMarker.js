import Files from '../../data/output1.json'

const placeMarker=(Files)=>{
    data=JSON.parse(Files)
    console.log(data)
    for (var i=0; i<data.length; i++){  
        var marker = new google.maps.Marker({position:{lat : data[i].lat,lng: data[i].lng}, map: map});
    }
}

export default placeMarker