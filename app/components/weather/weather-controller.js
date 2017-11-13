function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		function draw(){
			var elem = document.getElementById('weather')
			elem.innerHTML = `<img src="${weather.weather[0].icon}">
			
			</img>
			`

		}
	})

}
