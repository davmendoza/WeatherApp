$(document).ready(function(){
    $('#submitWeather').click(function(){
        
        var city = $('#city').val();
        var state = $('#state').val();

        if(city != ''){

            $.ajax({

                url:'http://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial" + "&APPID=7f1dcb44e7dbc65fc6e5097ebb0f6a06",
                method: "GET",
                //dataType: "jsonp"

            }).then(function(response){
                

            });

        }else{
            $("error").html('This cannot be empty')
        } 

    });

});

function display (response) {  
    return "<h2><"
}