import React, { useState } from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

const FormToDo = (props) => {
  const { handleAddItem } = props;
  const [Task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Task.length) {
      handleAddItem({
        done: false,
        id: (+new Date()).toString(),
        Task,
      });
      setTask("");
    }
  };
  return (
    <Box
      component="form"
      noValidate
      sx={{
        pt: 4,
        pb: 2,
        display: "flex",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        id="task"
        label="Nueva Tarea"
        name="task"
        autoComplete="task"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
      />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          paddingLeft: "5px",
        }}
      >
        <IconButton
          onClick={handleSubmit}
          color="primary"
          aria-label="delete"
          disabled={Task ? "" : "disabled"}
        >
          <AddTaskIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FormToDo;
