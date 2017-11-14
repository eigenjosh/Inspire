function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random';
	var apiUrl = url + encodeURIComponent(url2)

	function logError(err) {
		console.error(err)
	}

	this.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			callWhenDone(res)
		})
	}
}