import React, { useMemo, useState} from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef} from 'material-react-table';
import FetchInstance from "../../fetchInstance/Fetch";
import { useLocation } from "react-router-dom";
import { UserSheetsDataContext } from "../../context/UserSheets";
import { DefaultSheetDataContext } from "../../context/DefaultSheets";
import { SnackbarContext } from "../../context/SnackbarProvider";
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import './Table.css';

interface topicTagSchema {
  name: string;
  id: string;
  slug: string;
}

interface Question_Sheet {
  _id: string;
  acRate: string;
  difficulty: "Hard" | "Medium" | "Easy";
  freqBar: string;
  frontendQuestionId: number;
  isFavor: boolean;
  paidOnly: boolean;
  status: string;
  title: string;
  titleSlug: string;
  link: string;
  topicTags: topicTagSchema[];
  hasSolution: boolean;
  hasVideoSolution: boolean;
}

const TableForAdding = () => {
  const location = useLocation();
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [loading,setLoading]=useState<boolean>(false);
  const [page, setPage] = React.useState({
    pageIndex:0,
    pageSize:10,
  });
  // const [search,setSearch]=React.useState<String|number>("");
  const [rows, setRows] = React.useState<Question_Sheet[] | null>(null);
  const sheetid: number = location.state?.sheetid;
  const sheetType: string = location.state?.sheetType;
  const { refreshSheets } = React.useContext(UserSheetsDataContext);
  const { refreshSheets2 } = React.useContext(DefaultSheetDataContext);
  const { openSnackbar } = React.useContext(SnackbarContext);

  const AddQuestion = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    row: Question_Sheet,
    sheetid: number
  ) => {
    e.preventDefault();
    try {
      let response;
      if (sheetType === "Default") {
        response = await FetchInstance("/api/sheet/add-question", {
          method: "POST",
          body: JSON.stringify({ row, sheetid }),
        });
      } else {
        response = await FetchInstance("/api/sheet/user/add-question", {
          method: "POST",
          body: JSON.stringify({ row, sheetid }),
        });
      }

      switch (response.message) {
        case "List not found":
          openSnackbar("No Sheet please try again");
          break;
        case "Question Already in List":
          openSnackbar("Question Already in List");
          break;
        case "Issue in adding":
          openSnackbar("Issue in adding");
          break;
        case "Updation done":
          openSnackbar("Added Question to Sheet");
          sheetType === "Default" ? refreshSheets2() : refreshSheets();
          break;
        default:
          openSnackbar("Unknown response");
      }
    } catch (err) {
      openSnackbar("Server Error");
      alert("server error try after sometime");
    }
  };

  const GetQuestionData = async () => {
       setLoading(true);
    try {
      const QuestionData = await FetchInstance(
        `/api/question/list?page=${page.pageIndex}&limit=${page.pageSize}&search=${globalFilter}`,
        { method: "GET" }
      );

      if (QuestionData.status) {
        setRows(QuestionData.data);
      }
    } catch (err) {
      openSnackbar("Server Side Error");
      setLoading(false);
      console.log(err);
    }
    setLoading(false);
  };


  React.useEffect(() => {

   
    GetQuestionData();
    

  }, [page.pageIndex,page.pageSize,globalFilter]);


  

  // const onSearch=(e:React.ChangeEvent<HTMLInputElement> )=>{
      
  //     console.log(e.target.value);
  //     setSearch(e.target.value);
  //     console.log(search);

  // }

  const columns = useMemo<MRT_ColumnDef<Question_Sheet>[]>(
    () => [
        {
            header: 'S. No',
            accessor: 'sno', // optional, just for reference
            Cell: ({ row }) => <span>{row.index + 1}</span>, // Display the row index + 1
            muiTableHeadCellProps: { style: { color: '#0088cc' } },
            enableHiding: false,
        },
     
      {
        header: 'Question Name',
        accessorKey: 'title', // matches Question_Sheet field
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
      },
      {
        header: 'Difficulty Level',
        accessorKey: 'difficulty', // matches Question_Sheet field
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
      },
      {
        header: 'Leet Code Question Number',
        accessorKey: 'frontendQuestionId', // matches Question_Sheet field
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
      },
      {
        header: 'Main Topic',
        accessorFn: (row) => row.topicTags?.[0]?.name || 'N/A', // handles topicTags array
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
      },
      {
        header: 'Leetcode Link',
        accessorKey: 'link', // matches Question_Sheet field
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
        Cell: ({ cell }) => (
          <a href={cell.getValue<string>()} target="_blank" rel="noopener noreferrer">
            View Link
          </a>
        ),
      },
      {
        header: 'Action',
        muiTableHeadCellProps: { style: { color: '#0088cc' } },
        enableHiding: false,
        Cell: ({ row }) => (
          <Button onClick={(e) => AddQuestion(e, row.original, sheetid)}>
            Add
          </Button>
        ),
      },
    ],
    [page,sheetid]
  );

  const table = useMaterialReactTable({
    columns,
    data: rows || [], 
    state:{
       isLoading:loading,
       globalFilter:globalFilter,
       pagination:page,
    },
    muiCircularProgressProps: {
      Component: <CircularProgress/> ,
    },
    manualFiltering: true,
    enableColumnFilters: false,
    enableHiding:false,
    onGlobalFilterChange: setGlobalFilter, 
    manualPagination:true,
    onPaginationChange: setPage,
    rowCount: 3308, 

    
  });

  return <div className='table-container'>
     <div className='table-inner'>
   {/* <input placeholder='search leet code question id' style={{height:'50px'}}  type='text'  onChange={(e)=>{onSearch(e)}} /> */}
   {/* <button onClick={GetQuestionData}> Search </button> */}
  <MaterialReactTable table={table} />
{/*  
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
    <Button
      onClick={() => setPage((prev) =>
        prev == "1" ? prev : String(parseInt(prev) - 1)
      )}
    >
      Previous
    </Button>
    <span style={{ margin: '0 10px' }}>Page: {page}</span>
    <Button onClick={() => setPage((prev) => String(parseInt(prev) + 1))}>
      Next
    </Button>
  </div> */}
  </div>
</div>
};

export default TableForAdding;
