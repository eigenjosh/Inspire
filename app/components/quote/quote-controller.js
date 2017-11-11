function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)

		document.getElementById('quote').innerText = `${quote.quote}`
	})
}
