import  React,{useContext} from 'react';
import SheetCardViewInDashboard from './Sheets/SheetCardViewInDashboard';
import { UserSheetsDataContext } from '../../context/UserSheets';
import { DefaultSheetDataContext } from '../../context/DefaultSheets';
import { currentPageStateContext } from '../../context/CurrentPageState';


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
 
  const {UserSheetsData}=useContext(UserSheetsDataContext);
  const {DefaultSheetData}=useContext(DefaultSheetDataContext);
   const {currentstate}=useContext(currentPageStateContext);

  

  return (
      <>      
       {currentstate==="DefaultSheet"? <SheetCardViewInDashboard SheetType="Default" UserSheetsData={DefaultSheetData}/>:currentstate==="UserSheet"?<SheetCardViewInDashboard SheetType="MySheet" UserSheetsData={UserSheetsData}/>:<h2> Welcome to Dashboard</h2>}
      </>


   
  );
};

export default Dashboard;
