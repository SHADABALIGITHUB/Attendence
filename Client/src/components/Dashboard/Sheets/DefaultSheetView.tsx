import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthStatus } from "../../../context/Auth";
import { QuestionDetail } from "../Dashboard";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Checkbox,
  Typography,
  LinearProgress,
  Link,
} from "@mui/material";
import FetchInstance from "../../../fetchInstance/Fetch";

const DefaultSheetView: React.FC = () => {
  const { sheetid } = useParams();
  const [progress, setProgress] = useState(0);
  const { userData } = useContext(AuthStatus);
  const [ListQuestion, SetListQuestion] = useState<
    QuestionDetail[] | undefined
  >(undefined);

  const GetQuestionData = async () => {
    try {
      const FetchQuestionList = await FetchInstance(
        "/api/question/get-userbased-sheet-question",
        {
          method: "POST",
          body: JSON.stringify({
            sheetid: sheetid,
            userEmail: userData?.email,
          }),
        }
      );

      if (FetchQuestionList) {
        //  console.log(FetchQuestionList);
        SetListQuestion(FetchQuestionList.questions);
        const progress = FetchQuestionList.progress;
        if (progress.length === 0) {
          setProgress(0);
        } else {
          let count = 0;
          const total = progress.length;
          for (const pro of progress) {
            if (pro === "1" || pro===1) {
              count++;
              
            }
          }

          // console.log((count / total) * 100);

          setProgress((count / total) * 100);
        }
      }
    } catch (err) {
      console.log("error in view Page", err);
    }
  };
  const OnSolved = () => {
    alert("Working on this Part ");
  };

  useEffect(() => {
    GetQuestionData();
  }, []);

  if (!ListQuestion) {
    return (
      <>
        <h1> Loading .. </h1>
      </>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: "100px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={7}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color={`${progress === 100 ? "success" : "primary"}`}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>S.no </TableCell>
            <TableCell align="center">Leet Code Question Number</TableCell>
            <TableCell align="center">Question Name </TableCell>
            <TableCell align="center">Difficulty Level</TableCell>
            <TableCell align="center">Main Topic</TableCell>
            <TableCell align="center">Problem Link </TableCell>
            <TableCell align="center"> Solved </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ListQuestion.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Typography variant="body2">
                  No Questions In this Sheet Yet, please Add
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            ListQuestion.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  border: 0,
                  backgroundColor: item.status ? "#D1FFBD" : "",
                }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.frontendQuestionId}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.difficulty}</TableCell>
                <TableCell align="center">
                  {item.topicTags.map((item, index2) => {
                    return (
                      <Typography variant="body2" key={index2}>
                        {" "}
                        {item.name}
                      </Typography>
                    );
                  })}{" "}
                </TableCell>
                <TableCell align="center">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Visit{" "}
                  </Link>{" "}
                </TableCell>
                <TableCell align="center">
                  <Checkbox
                    checked={item.hasSolution}
                    onChange={OnSolved}
                    name={item.hasSolution ? "Solved" : "Unsolved"}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DefaultSheetView;
