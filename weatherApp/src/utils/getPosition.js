const request = require('request');


const getPosition = (location, callback)=>{
    const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYW5pazU4NyIsImEiOiJjanp3ZWJjaGgwYXVvM2xvMTJ0bHhoN21oIn0.VRvnGkVOjUKRxKdl3Yz6_A&limit=1`;

    request({
        url: geoCodeUrl,
        json: true,
    }, (error, response) => {
        if (error) {
            callback('Unable to connect location service', undefined);
        } if (response.body.features === undefined) {
            callback('Unable to fetch location', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unknown Location', undefined);
        } else {
            let latitude = response.body.features[0].center[1];
            let longitude = response.body.features[0].center[0];
            callback(undefined, [latitude, longitude]);

        }
    });
}



     module.exports = {
         getPosition: getPosition
     }