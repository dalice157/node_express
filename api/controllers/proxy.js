// express web framework
const express = require('express');
const router = express.Router();

//判斷 env 是 dev 還是 prod
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/config')[env];
//後端 api 串接
const guestPid = 1;
const JAVA_URL = config.backend.domain;

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

//當 url 是 /user/:pid 時, 取得某一筆資料
router.get('/user/:pid', (req, res) => {
	const { pid } = req.params;
  const who = guestPid;
	fetch(`${JAVA_URL}/user/${pid}/${who}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		}
	})
	.then(status)	
	.then(function(data) {		
		res.status(200).json(data);
	}).catch(function(error) {
		console.log('Request failed', error);
		let apiError = error.errors || {message:'internal error'};		
		res.status(error.status || 500).json({ 'error': apiError.message});
	});
})

module.exports = router;