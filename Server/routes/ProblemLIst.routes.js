const express=require('express');

const Router=express.Router();

const {fetchLeetCodeProblems}=require('../controllers/fetchproblem');

Router.route('/').get(fetchLeetCodeProblems);


module.exports= Router;