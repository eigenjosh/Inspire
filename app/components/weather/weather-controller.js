function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(res){
			var elem = document.getElementById('weather')
			elem.innerHTML = `<img src="${weather[0].icon}">
			
			</img>
			`

		}
	)

}
