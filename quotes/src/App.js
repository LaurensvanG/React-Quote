import React from 'react';
import { connect } from 'react-redux';
import store from "./app/store"

import { ThemeProvider, Grid, withStyles, createStyles, CssBaseline, useMediaQuery, Typography } from '@material-ui/core';
import createTheme from "./styles/theme"
import QuoteBox from "./components/QuoteBox"
import { apiCall } from "./components/quoteApiCall"
import LightDark from './components/LightDark';
import { changeType } from './components/changeTheme';

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
  },
  "sub": {
    textAlign: "center",
    fontSize: ".8em"
  }
})

function App(props) {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  React.useMemo( () => {
      store.dispatch(changeType(prefersLightMode))
  }, [prefersLightMode])

  const theme = createTheme(props.light, props.dark, props.type)

  store.dispatch(apiCall())
  
  const outside = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {outside && <LightDark outside={true} />}
      <Grid container justify="center" alignItems="center" className={props.classes.fullHeight}>
          
        <Grid item xs={12} sm={8} lg={6} xl={4}>
          <QuoteBox />

          < br />
          < br />

          <Typography variant="subtitle1" className={props.classes.sub}>
            Designed and Coded by<br/>
            Laurens van Giersbergen
          </Typography>
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}


const mapStateToProps = (state) => { 
  return {light: state.theme.light, dark: state.theme.dark, type: state.theme.type}
}

export default withStyles(styles)(connect(mapStateToProps)(App));
