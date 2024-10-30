import React, { useMemo} from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef} from 'material-react-table';
import FetchInstance from "../../fetchInstance/Fetch";
import { useLocation } from "react-router-dom";
import { UserSheetsDataContext } from "../../context/UserSheets";
import { DefaultSheetDataContext } from "../../context/DefaultSheets";
import { SnackbarContext } from "../../context/SnackbarProvider";
import Button from '@mui/material/Button';
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
  const [page, setPage] = React.useState("1");
  const limit = 20;
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

  React.useEffect(() => {
    const GetQuestionData = async () => {
      try {
        const QuestionData = await FetchInstance(
          `/api/question/list?page=${page}&limit=${limit}`,
          { method: "GET" }
        );

        if (QuestionData.status) {
          setRows(QuestionData.data);
        }
      } catch (err) {
        openSnackbar("Server Side Error");
        console.log(err);
      }
    };

    GetQuestionData();
  }, [page]);

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
    enablePagination:false,
   
    });

  return <div className='table-container'>
     <div className='table-inner'>
  <MaterialReactTable table={table} />
 
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
  </div>
  </div>
</div>
};

export default TableForAdding;
