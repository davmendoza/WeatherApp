
var city = "san diego";
//var querycURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&appid=7f1dcb44e7dbc65fc6e5097ebb0f6a06";
//var queryfURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial&appid=7f1dcb44e7dbc65fc6e5097ebb0f6a06";
function currentWeather() {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&appid=7f1dcb44e7dbc65fc6e5097ebb0f6a06";

    $.ajax({
        type: "method",
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)
        $('.city').append(response.name);
        $('.temp').append(response.main.temp + " &#8457; ");
        $('.humidity').append(response.main.humidity + " %");
        $('.wind').append(response.wind.speed + " MPH");
        

    });
};

function forecast() {
    //var city = "san diego";
    var queryfURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial&appid=7f1dcb44e7dbc65fc6e5097ebb0f6a06";

    $.ajax({
        type: "method",
        url: queryfURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryfURL)
        console.log(response)
        
        $('.sun').text(response.list[2].main.temp);
        $('.mon').text(response.list[10].main.temp);
        $('.tues').text(response.list[18].main.temp);
        $('.wed').text(response.list[26].main.temp);
        $('.thurs').text(response.list[34].main.temp);
        $('.weather-date').text(response.list[0].dt_txt);




    });
};

// var searchButton = $('#submitWeather');
// var citySearchInput = $('#city').val();

//current weather data




// function init() {
//     $("#submitWeather").on('click', function(event) {
// var citySearchInput = $('#city').val();

//        

//     });
$(document).ready(function () {
    currentWeather()
    forecast()
});

