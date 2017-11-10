function WeatherController(){
	console.log('Initializing weather-controller.js...')
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log('Instantiating weather-service.js...')
		console.log('Done.',weather);
		function draw(){
			var template = ''
			var 
		}
	})

}
