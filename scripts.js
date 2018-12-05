// Create a request variable and assign a new XMLHTTPRequest object to it
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.smmry.com', true);

request.onload = function () {
// Begin accessing JSON data here
var params = {
	host: 'api.smmry.com',
	path: '/&SM_API_KEY=B64FC77ED6&SM_URL=' + 'https://www.theverge.com/2018/9/19/17875882/new-apple-watch-series-4-review-ekg-bands-screen-price',
	method: 'POST'
};
// Attempt to access api host api.smmry.com
// enter api key and article url, article url taken from RSS feed script
var req = http.request(params, function(res) {
	res.on('data', function(data) {
		console.log(JSON.parse(data.toString()));
	});
	res.on('end', function() {
		console.log('No more data in response.');
	});
});
}
}
// take smmry api json output and parse into string
// Send request
request.send();

