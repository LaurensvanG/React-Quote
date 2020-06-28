import React from 'react';
import './App.css';
import QuoteBox from "./components/QuoteBox"
import { ThemeProvider, Grid, withStyles, createStyles, MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from "./styles/theme"
import store from "./app/store"
import { apiCall } from "./components/quoteApiCall"

const styles = theme => createStyles({
  "@global": {
      body: {
        height: "100vh",
        margin: 0
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
  console.log(props)
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Grid container justify="center" alignItems="center" className={props.classes.fullHeight}>
          
        <Grid item xs={12} sm={8} lg={6} xl={4}>
          <QuoteBox />
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
