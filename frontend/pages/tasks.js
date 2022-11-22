import { Card, CardContent, Box, Typography } from "@mui/material";
import { useState } from "react";
import FormToDo from "../components/ToDo/FormToDo";
import TaskList from "../components/ToDo/TaskList";

export default function Tasks() {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <Box
      className="content-center"
      sx={{
        minHeighy: "100vh",
        overflowX: "hidden",
        position: "relative",
        marginTop: 8,
      }}
    >
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{
            padding: (theme) => `${theme.spacing(8, 5, 8)} !important`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Lista de Tareas
            </Typography>
            <FormToDo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
