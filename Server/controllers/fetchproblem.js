const axios = require('axios');
const {Question}=require('../models/Problems/Leetcodeproblem');
const mongoose=require('mongoose');

const  fetchLeetCodeProblems=async(req,res)=> {
    const url = 'https://leetcode.com/graphql/';
    const session = '<LEETCODE_SESSION>'; // Replace with your actual session
    const csrfToken = '<csrftoken>'; // Replace with your actual csrf token

    const headers = {
        'Content-Type': 'application/json',
        'Cookie': `LEETCODE_SESSION=${session}; csrftoken=${csrfToken}`
    };

    const data = {
        query: `
            query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
              problemsetQuestionList: questionList(
                categorySlug: $categorySlug
                limit: $limit
                skip: $skip
                filters: $filters
              ) {
                total: totalNum
                questions: data {
                  acRate
                  difficulty
                  freqBar
                  frontendQuestionId: questionFrontendId
                  isFavor
                  paidOnly: isPaidOnly
                  status
                  title
                  titleSlug
                  topicTags {
                    name
                    id
                    slug
                  }
                  hasSolution
                  hasVideoSolution
                }
              }
            }
        `,
        variables: {
            categorySlug: "",
            skip: 0,
            limit: 3308,
            filters: {}
        }
    };


    try {
        const response = await axios.post(url, data, { headers });
         
         
      
    for(let i=0;i<3308;i++){
        const value=response.data.data.problemsetQuestionList.questions[i];

        const done= await  Question.create({

"acRate": value.acRate,
"difficulty": value.difficulty,
"freqBar": value.freqBar,
"frontendQuestionId": value.frontendQuestionId,
"isFavor": value.isFavor,
"paidOnly":  value.paidOnly,
"status": value.status,
"title": value.title,
"titleSlug": value.titleSlug,
"link": `https://leetcode.com/problems/${value.titleSlug}/description/`,
"topicTags": value.topicTags,
"hasSolution": value.hasSolution,
"hasVideoSolution": value.hasVideoSolution,

        });

        console.log(`Done ${i}`)
  
         
      }

        res.send(`User Created`);





    } catch (error) {
        console.error('Error fetching data:', error);
        res.send("Error in between");
    }
}


module.exports={fetchLeetCodeProblems}


