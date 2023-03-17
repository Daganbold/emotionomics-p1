const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7581ab109mshb2448b70913ae59p140944jsn7252faffa6f0',
		'X-RapidAPI-Host': 'uncovered-treasure-v1.p.rapidapi.com'
	}
};

fetch('https://uncovered-treasure-v1.p.rapidapi.com/topics', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));