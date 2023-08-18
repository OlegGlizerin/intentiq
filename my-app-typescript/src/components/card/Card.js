import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// interface CardProps {
//    children: JSX.Element | ReactNode;
// }


export default function BasicCard() { //props: CardProps
   return (
      <Card sx={{ minWidth: 275 }}>
         {/* <CardContent>{props.children}</CardContent> */}
      </Card>
   );
}
