import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CheckTask = (props) => {
  const {
    onChange,
    onClick,
    onClickRemove,
    data: { id, Task, done },
  } = props;

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton
            id={id}
            edge="end"
            aria-label="delete"
            sx={{ alignItems: "center", display: "block" }}
            onClick={onClickRemove}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        {done ? " " : ""}
        <ListItemButton name={id} role={undefined} dense onClick={onClick}>
          <ListItemIcon>
            <Checkbox
              name={id}
              edge="start"
              checked={done}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": { id } }}
              onChange={onChange}
            />
          </ListItemIcon>
          <ListItemText id={id} primary={Task} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default CheckTask;
