const request = require('request')
const forecast = (latitude, longitude, callback) => {

    const url=`http://api.weatherstack.com/current?access_key=6869196516fc99105be91164df17dfd6&query=${latitude},${longitude}`;

    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,'It`s currently '+response.body.current.weather_descriptions[0]+' out there.'+'It is currently ' + response.body.current.temperature + ' degress out. There is  ' + response.body.current.wind_speed + ' of wind speed.'+'There is  '+ response.body.current.cloudcover +'% of cloud cover.')
        }
    })
}

module.exports = forecast