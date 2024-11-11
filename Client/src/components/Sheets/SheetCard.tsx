import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserSheetType } from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { AuthStatus } from "../../context/Auth";
interface SheetCardProps {
  data: UserSheetType;
  SheetType: string;
}
const SheetCard: React.FC<SheetCardProps> = ({ SheetType, data }) => {
  const navigate = useNavigate();
  const {userData} =useContext(AuthStatus);
  return (
    <Card sx={{ maxWidth: 345, minWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.sheetImg ? data.sheetImg : "./images/Cards/code1.jpg"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title.length>25?data.title.slice(0,25)+"...":data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Total Question : {data.Listquestion.length}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Created At : {data.createdAt.slice(0, 10)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            { SheetType==="UserSheet"?
            navigate(`/view-user/${data.sheetid}`):
            navigate(`/view-default/${data.sheetid}`);
             
            }

          }}
        >
          {" "}
          Open{" "}
        </Button>

        {SheetType === "UserSheet" ? (
          <Button
            size="small"
            onClick={() => {
              navigate("/create-sheet-table", {
                state: { sheetid: data.sheetid },
              });
            }}
          >
            {" "}
            Add Questions{" "}
          </Button>
        ) : userData?.email ===
          import.meta.env.VITE_ADMIN_EMAIL ? (
          <Button
            size="small"
            onClick={() => {
              navigate("/create-sheet-table", {
                state: { sheetid: data.sheetid, sheetType: SheetType },
              });
            }}
          >
            {" "}
            Add Questions{" "}
          </Button>
        ) : (
          <Button disabled={true}> Add Questions </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default SheetCard;
