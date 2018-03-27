// express web framework
const express = require('express');
const router = express.Router();

const fs = require('fs'); //讀取 api 資料


const config = require('../config/config');

router.all('*', function(req, res, next){
  fs.readFile('./posts.json', function(err, data){
    res.locals.lists = JSON.parse(data);
    next();
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {title:`此路徑是: localhost:${config.port}/api`});
});

//顯示 posts.json 資料
router.get('/posts', function(req, res){
  res.json(res.locals.lists);
});

//當 url 是 /post/:id 時, 取得某一筆資料
router.get('/:id', function(req, res, next){
  //取得 post.json 資料夾
  res.locals.lists.forEach(function(list){
    //從 url 取得 id 參數與 posts.json 裡的 id
    if (req.params.id === list.id){
      //顯示參數為  url 中 id 的 post.id, 那麼顯示部分資料
      res.render('lists.ejs',{list: list, title: list.title});
    }
  })
});

module.exports = router;