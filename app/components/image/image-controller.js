function ImageController() {

	var imageService = new ImageService();
	
	imageService.getImage(function (image) {
		var largeUrl = image.large_url
		if (largeUrl == null) {

		} else {
			document.body.style.backgroundImage = `url(${image.large_url})`
			
		}
	})
}