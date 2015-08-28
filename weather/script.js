
$(document).ready(function () {
    getLocation();
});
function getLocation() {
    $.get('http://ipinfo.io', function (location) {
        $('.location').append(location.city + ", " + location.region);
        getWeather(location.loc);
    }, 'jsonp');
}




function getWeather(location) {
    lat = location.split(',')[0];
    lon = location.split(',')[1];
    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + "imperial";
    console.log(weatherApiUrl);
    $.get(weatherApiUrl, function (weather) {
        var temperature = Math.round(weather.main.temp);
        console.log(weather);

            $(".temperature").append(temperature + " F");
            $(".weather-icon").append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
            
            $(".condition").append(weather.weather[0].description);
        }, 'jsonp');
}
