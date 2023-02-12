const request = require('request');
const getWeather = (url, callback) => {
    request({
        url: url,
        json: true
    },
        (error, response) => {
            if (error) {
                callback('Unable to connect weather service', undefined);
            } else if (response.body.error) {
                callback('Unable to find weather data', undefined);
            } else {
                const data = response.body;
                callback(undefined, [data.timezone, data.daily.data[0].summary, data.daily.data[0].precipType]);
            }
        });
}


module.exports = {
    getWeather: getWeather
}