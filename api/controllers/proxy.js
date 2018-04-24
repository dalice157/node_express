//判斷 env 是 dev 還是 prod
const env = process.env.NODE_ENV || 'dev'; 

const express = require('express');
const config = require('../config/config')[env];
const restTool = require('../controllers/restTool');

const router = express.Router();

//後端 api 串接
const guestPid = 1;
const JAVA_URL = config.backend.domain;



//當 url 是 /user/:pid 時, 取得某一筆資料
router.get('/user/:pid', (req, res) => {
	const { pid } = req.params;
	const who = guestPid;
	
	restTool.callAPIGet(`${JAVA_URL}/user/${pid}/${who}`, res);
})


router.get('/shop/:sid', (req, res) => {
  const { sid } = req.params;
	const who = 1;

	restTool.callAPIGet(`${JAVA_URL}/shop/${sid}/${who}`, res);
})

router.get('/shop/:sid/introduction', (req, res) => {
  const { sid } = req.params;
	const who = 1;

	restTool.callAPIGet(`${JAVA_URL}/shop/${sid}/introduction/${who}`, res);
})

router.get('/items', (req, res) => {
	restTool.callAPIGet('http://localhost:3030/posts.json', res);
})

module.exports = router;