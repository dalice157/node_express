function status(response) {
	if (response.ok) {
		return response.json();
	} else {
		return response.json().then(function(err) {			
			err.status = response.status;
			throw err;		
		});
	}
}

function commonRest(promise,res){
	console.log('promise', promise)
	return promise.then(status)
	.then(json => res ? res.status(200).json(json) : json) //return to chain
	.catch(error => {
		logger.error('Request failed', error);
		let apiError = error.errors || {message:'internal error'};		
		res.status(error.status || 500).json({ 'error': apiError.message});
	});
}

function callAPIGet(url,res){
	const promise = fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
	});
	return commonRest(promise,res);
}


module.exports = {
	// restGET: restGETProcess,
	callAPIGet: callAPIGet	
};