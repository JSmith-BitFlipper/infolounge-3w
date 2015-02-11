function getWeather() {
    $.simpleWeather({
        zipcode: '02139',
        unit: 'f',
        success: function(weather) {
            html = '<div class="row">';
            html += '<div class="large-4 columns"><img src="images/weather/' + weather.code + '.png" width="105"></div>';
            html += '<div class="large-8 columns">';
            html += '<span class="weather-feel">' + weather.currently + '</span><br/>';
            html += '<span class="weather-temp">' + ((weather.temp-32)*(5/9)).toFixed() + '&deg;C / ' + weather.temp + '&deg;F</span><br/>';
	    if (weather.temp-weather.wind.chill != 0) {
                html += '<span class="weather-feel">Feel ' + ((weather.wind.chill-32)*(5/9)).toFixed() + '&deg;C / ' + weather.wind.chill + '&deg;F</span><br/>'; }
            html += '</div></div>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
};
