// express web framework
const express = require('express');
const router = express.Router();

// const fs = require('fs'); //讀取 api 資料

//判斷 env 是 dev 還是 prod
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/config')[env];
//後端 api 串接
const guestPid = 0;
const JAVA_URL = config.backend.domain;

// router.all('*', function(req, res, next){
//   fs.readFile('./posts.json', function(err, data){
//     res.locals.lists = JSON.parse(data);
//     next();
//   });
// });

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



//顯示 posts.json 資料
router.get('/posts', function(req, res){
  res.json(res.locals.lists);
  //此部份可加fetch
});

//當 url 是 /post/:id 時, 取得某一筆資料
router.get('/:id', function(req, res, next){
  /**
   * 此部份可加fetch
   * const {id} = req.params;
   * const who = guestPid;預設為 0，此部份可以判斷是哪個 user 
   */

  fetch('./posts.json', {
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
  //取得 post.json 資料夾
  // res.locals.lists.forEach(function(list){
  //   //從 url 取得 id 參數與 posts.json 裡的 id
  //   if (req.params.id === list.id){
  //     //顯示參數為  url 中 id 的 post.id, 那麼顯示部分資料
  //     res.render('lists.ejs',{list: list, title: list.title});
  //   }
  // })
});

module.exports = router;