const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7581ab109mshb2448b70913ae59p140944jsn7252faffa6f0',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));