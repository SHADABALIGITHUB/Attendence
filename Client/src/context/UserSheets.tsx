import React, { createContext, useState, useEffect } from 'react';


 interface topicTagSchema{
    name: string,
    id:string,
    slug:string,
  };


interface Question_Sheet{
_id: string,  
acRate: string,
difficulty:"Hard"|"Medium"|"Easy",
freqBar:string,
frontendQuestionId:number,
isFavor: boolean,
paidOnly: boolean,
status: string,
title: string,
titleSlug: string,
link:string,
topicTags: topicTagSchema[],
hasSolution: boolean,
hasVideoSolution: boolean,
}
interface QuestionSheetContextType{
    SheetData:Question_Sheet[],
    setSheetData:React.Dispatch<React.SetStateAction<Question_Sheet[]>>
}

export const SheetDataContext= createContext<QuestionSheetContextType>({
    SheetData:[],
    setSheetData:()=>{},
});

// Create a provider component
export const SheetDataProvider:React.FC<{children:React.ReactNode}> = ({ children }) => {
    const [SheetData, setSheetData] = useState<Question_Sheet[]>([]);

    useEffect(() => {
        // Fetch data from user sheets
        const fetchSheetData = async () => {
            try {
                // Replace this URL with your actual endpoint
                const response = await fetch('YOUR_SHEETS_API_URL');
                const data = await response.json();
                setSheetData(data);
            } catch (error) {
                console.error("Error fetching card data:", error);
            }
        };

        fetchSheetData();
    }, []);

    return (
        <SheetDataContext.Provider value={{ SheetData,setSheetData }}>
            {children}
        </SheetDataContext.Provider>
    );
};
