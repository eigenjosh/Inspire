function ImageController() {

	var imageService = new ImageService();

	imageService.getImage(function (image) {
		document.body.style.backgroundImage = `url(${image.url})`


	})

}