function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (res) {
		var elem = document.getElementById('weather')
		debugger
		elem.innerHTML = `<img src="${weather.icon}">
			
			</img>
			`

	}
	)

}
