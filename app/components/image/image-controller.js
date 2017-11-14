function ImageController() {

	var imageService = new ImageService(refresh);
	
	imageService.getImage(function (image) {
		var largeUrl = image.large_url
		if (largeUrl == null) {

		} else {
			document.body.style.backgroundImage = `url(${image.large_url})`
			
		}
	})
}