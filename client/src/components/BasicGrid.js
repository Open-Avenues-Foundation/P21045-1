import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from './Footer'
import Header from './Header'
import DataTable from './DataTable'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={12}>
          <Item><Header /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Contacts Table Title Bar</Item>
        </Grid>
        <Grid item xs={6}>
        <Item>Contact Table Search Bar</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Contact Table Seatch Box</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Search Box Selector</Item>
        </Grid>
        <Grid item xs={12}>
          <Item><DataTable /></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><Footer/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}