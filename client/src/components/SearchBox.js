import React from "react";
import { TextField, Grid, InputLabel } from "@mui/material";

export default function SearchBox(props) {
  const { value, onChange, name } = props;

  return (
    <Grid item xs={5}>
      <TextField
      InputLabelProps={{ shrink: true }}
        id="SearchBox"
        value={value}
        onChange={onChange}
        label={name}
        fullWidth
      />
    </Grid>
  );
}
