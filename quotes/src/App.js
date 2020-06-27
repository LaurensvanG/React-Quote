import React from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox"
import { ThemeProvider, createMuiTheme, useMediaQuery, Paper, Container, Box, Grid, withStyles, createStyles } from '@material-ui/core';
import theme from "./styles/theme"
import store from "./app/store"
import { apiCall } from "./components/quoteApiCall"

const styles = theme => createStyles({
  "@global": {
      body: {
        height: "100vh",
        margin: 0,
        backgroundColor: theme.palette.background
      },

      "#root": {
        height: "100vh"
      }
    }, 
  "fullHeight": {
    height: "100%"
  }
})


function App(props) {
  store.dispatch(apiCall())

  return (
    <ThemeProvider theme={theme()}>
      <Grid container maxWidth="sm" justify="center" alignItems="center" fluid className={props.classes.fullHeight}>
          
        <Grid item xs={12} md={6}>
          <QuoteBox />
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
