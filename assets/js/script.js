const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '249f566bbdmsh5a8a690f2cf015ap1db355jsn44e4a97a11da',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));