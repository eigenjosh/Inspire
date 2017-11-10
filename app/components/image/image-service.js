function ImageService() {

	console.log('image-service.js:3')
	var apiKey = '7dbq8sjv54u5csa5zbksdarc';
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'https://api.gettyimages.com/v3/images/';
	var apiUrl = url + encodeURIComponent(url2);


	this.getImage = function (callWhenDone) {
		function makeRequest(){
			httpRequest = new XMLHttpRequest();
			httpRequest.open('GET', apiUrl);
			httpRequest.setRequestHeader('Api-Key', '7dbq8sjv54u5csa5zbksdarc');
			httpRequest.send();
		}
		console.log('Getting image...')
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)

			callWhenDone(res);
		})
	}
}