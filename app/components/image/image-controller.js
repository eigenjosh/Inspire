function ImageController() {

	console.log('image-controller.js:3')
	var imageService = new ImageService();

	imageService.getImage(function (image) {
		console.log('Image data:', image);
		
	})

}