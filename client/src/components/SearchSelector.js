import React from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export default function SearchSelector(props) {
  const { value, name, onChange, menuItems } = props;

  return (
    <Grid item xs={1.75}>
      <FormControl fullWidth>
        <InputLabel id="SearchSelectorLabel">{name}</InputLabel>
        <Select
        InputLabelProps={{ shrink: true }}
          labelId="SearchSelectorLabel"
          id="SearchSelector"
          value={value}
          label={name}
          onChange={onChange}
        >
          {menuItems.map((menuItem) => {
            return <MenuItem key={menuItem.value} value={menuItem.value}>{menuItem.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Grid>
  );
}
