import React, { useState } from "react";
import { Button, Typography, List, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CheckTask from "./CheckTask";
import DeleteIcon from "@mui/icons-material/Delete";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import MoodIcon from "@mui/icons-material/Mood";

const TaskList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  const onClickStatus = (e) => {
    const { name } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? !item.done : item.done,
    }));
    setList(updateList);
  };
  const onClickRemoveItemDone = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const { id } = e.target;
    const updateList = list.filter((item) => item.id !== id);
    setList(updateList);
  };
  const chkAll = list.map((item) => (
    <CheckTask
      key={item.id}
      data={item}
      onChange={onChangeStatus}
      onClick={onClickStatus}
      onClickRemove={onClickRemoveItem}
    />
  ));
  1668717018708;
  1668717018708;
  const chkToDo = list
    .filter((item) => !item.done)
    .map((item) => (
      <CheckTask
        key={item.id}
        data={item}
        onChange={onChangeStatus}
        onClickRemove={onClickRemoveItem}
      />
    ));

  const chkDone = list
    .filter((item) => item.done)
    .map((item) => (
      <CheckTask
        key={item.id}
        data={item}
        onChange={onChangeStatus}
        onClick={onClickStatus}
        onClickRemove={onClickRemoveItem}
      />
    ));

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Todos" value="1" />
                <Tab label="Por Hacer" value="2" />
                <Tab label="Completadas" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {chkAll.length ? (
                chkAll
              ) : (
                <Typography
                  component="h4"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MoodBadIcon />
                  Sin Tareas
                  <MoodBadIcon />
                </Typography>
              )}
            </TabPanel>
            <TabPanel value="2">
              {chkToDo.length ? (
                chkToDo
              ) : (
                <Typography
                  component="h4"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MoodIcon />
                  Sin Tareas por Hacer
                  <MoodIcon />
                </Typography>
              )}
            </TabPanel>
            <TabPanel value="3">
              {chkDone.length ? (
                chkDone
              ) : (
                <Typography
                  component="h4"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MoodIcon />
                  Sin Tareas Completadas
                  <MoodIcon />
                </Typography>
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </List>

      {list.length ? (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={onClickRemoveItemDone}
        >
          Borrar Completados
        </Button>
      ) : null}
    </>
  );
};

export default TaskList;
