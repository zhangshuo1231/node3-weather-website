const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=20e94b8a3c731bade9de0d7d5d6d452c&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temprature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast