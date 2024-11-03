import  React from 'react';
import DashboardContent from './DasboardContent/DashboardContent';

interface TopicTag {
  name: string;
  id: string;
  slug: string;
}
export interface QuestionDetail{
 
    acRate: string;
    difficulty: string;
    freqBar: number | null; // Assuming freqBar can be null
    frontendQuestionId: number;
    isFavor: boolean;
    paidOnly: boolean;
    status: string | null; // Assuming status can be null
    title: string;
    titleSlug: string;
    link: string;
    topicTags: TopicTag[] // Assuming topicTags is an array of strings
    hasSolution: boolean;
    hasVideoSolution: boolean;
    _id: string;
    __v: number;

}

export interface UserSheetType{
_id: string,
Listquestion: QuestionDetail[],
title: string,
userId: string,
sheetImg:string,
createdAt: string,
sheetid: number

}

const Dashboard: React.FC = () => {
 

   
  return (
      <>     
       <DashboardContent/>
      </>


   
  );
};

export default Dashboard;
