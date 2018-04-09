const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// 後端 API
const API_URL = {
	lab: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com',
	ol: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com',
	prod: 'http://buddy-ap-elb-925050356.ap-northeast-1.elb.amazonaws.com'
};

// 建立每個變數 joi 驗證規則
const envVarSchema = Joi.object().keys({
  NODE_ENV: Joi.string().default('dev').allow(['dev', 'prod']), // 字串且預設值為 dev 並只允許兩種參數
  PORT: Joi.number().default(8080), // 數字且預設值為 8080
  VERSION: Joi.string() // 字串
}).unknown().required();

// process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = Joi.validate(process.env, envVarSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  version: envVars.VERSION, // 版本
  env: envVars.NODE_ENV,  // 開發模式
  port: envVars.PORT  // 阜號
};

module.exports = {
	dev: {
		app: config,
		backend:{
			domain: API_URL.lab
		}
	}
}