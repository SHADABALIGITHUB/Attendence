const express = require('express');
const {TokenToInfo}=require('../../controllers/Auth/TokenToInfo');
const Router=express.Router();

Router.route('/token-info').post(TokenToInfo);


module.exports= Router;