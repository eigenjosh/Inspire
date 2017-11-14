function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){

		document.getElementById('quote').innerHTML = `
		<blockquote class="blockquote-reverse">
			<p>${quote.quote}</p>
			<footer>
				<cite title="Source Title">${quote.author}</cite>
			</footer>
		</blockquote>`
	})
}
