import  React,{useContext} from 'react';
import SheetCardViewInDashboard from './Sheets/SheetCardViewInDashboard';
import { UserSheetsDataContext } from '../../context/UserSheets';
import { DefaultSheetDataContext } from '../../context/DefaultSheets';
import { currentPageStateContext } from '../../context/CurrentPageState';


export interface QuestionDetail{
  questionid: number,
  questionName:string,
  _id:string
}

export interface UserSheetType{
_id: string,
Listquestion: QuestionDetail[],
title: string,
userId: string,
createdAt: string,
sheetid: number,
sheetImg:string
}

const Dashboard: React.FC = () => {
 
  const {UserSheetsData}=useContext(UserSheetsDataContext);
  const {DefaultSheetData}=useContext(DefaultSheetDataContext);
   const {currentstate}=useContext(currentPageStateContext);

  

  return (
      <>      
       {currentstate==="DefaultSheet"? <SheetCardViewInDashboard SheetType="Default" UserSheetsData={DefaultSheetData}/>:currentstate==="UserSheet"?<SheetCardViewInDashboard SheetType="My Sheet" UserSheetsData={UserSheetsData}/>:<h2> Welcome to Dashboard</h2>}
      </>


   
  );
};

export default Dashboard;
