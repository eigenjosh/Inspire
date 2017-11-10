function ImageController() {

	console.log('image-controller.js:3')
	var imageService = new ImageService();

	imageService.getImage(function (res) {
		console.log('Image data:', res);
		document.body.style.backgroundImage.res
		
	})

}