import React from 'react'
import { TextField, Grid } from "@mui/material";

export default function SearchBox(props) {
  const {value, onChange, name} = props

  return (
    <Grid item xs={5}>
    <TextField
      id="searchSelector"
      value={value}
      onChange={onChange}
      label={name}
      fullWidth
    />
    </Grid>
  )
}
