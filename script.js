$(document).ready(function () {
var city = "san diego";
var APIKey = "7f1dcb44e7dbc65fc6e5097ebb0f6a06";
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&appid=" + APIKey;
// var searchButton = $('#submitWeather');
// var citySearchInput = $('#city').val();

$.ajax({
    type: "method",
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(queryURL)
    console.log(response)
    $('.city').text(response.city.name);
    $('.temp').text(JSON.stringify(response.list[0].main.temp));
    $('.humidity').text("Humidity: " + response.list[0].main.humidity);
    $('.wind').text(JSON.stringify(response.list[0].wind.speed));
    $('.weather-date').text(JSON.stringify(response.list[0].dt_txt));
    $('.sun').text(JSON.stringify(response.list[2].main.temp));
    $('.mon').text(JSON.stringify(response.list[10].main.temp));
    $('.tues').text(JSON.stringify(response.list[18].main.temp));
    $('.wed').text(JSON.stringify(response.list[26].main.temp));
    $('.thurs').text(JSON.stringify(response.list[34].main.temp));
    
    


});


// function init() {
//     $("#submitWeather").on('click', function(event) {
    // var citySearchInput = $('#city').val();

//        

//     });
}

