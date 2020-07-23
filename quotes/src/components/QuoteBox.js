import React from "react";
import { connect } from "react-redux";
import store from "../app/store";

import { Paper, Grid, Button, Container, createStyles, withStyles, Box, Divider, withWidth } from "@material-ui/core";
import SocialIcons from "./SocialIcons";
import QuoteText from "./QuoteText";
import { changeTheme } from "./changeTheme";
import LightDark from "./LightDark";


const styles = theme => createStyles({
  marginGrid: {
    flexGrow: 1,
  }
})


class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    }

    this.getQuote = this.getQuote.bind(this)
  }
  
  // Change the theme and set the "quote" in state to a random quote from 
  // "props.quotes" upon loading or when the "New quote" is pressed
  getQuote = () => { 
    store.dispatch(changeTheme())
    return (this.setState((state, props) => {
      return {quote: props.quotes[Math.floor(Math.random() * props.quotes.length)]}
    })
    )
  }

  // Prevent some uncessesary updates
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.quote) {
      if(this.state.quote.text !== nextState.quote.text || this.props.quotes.text !== nextProps.quotes.text) {
        return true;
      } 
    } 
    if(this.props.quotes)  return true;
      else if(this.props.width) {
        if(this.props.width !== nextProps.width){
          return true
        } else return false;
      } else return false;
  }
  
  // Get a first quote as soon as the quotes have been fetched and passed through the prop
  componentDidUpdate(prevProps) {
    if(!prevProps.quotes[0])
        if(this.props.quotes !== undefined && this.props.quotes.length !== 0) this.getQuote();;
  }

  render () {
    // Check whether the light/dark theme should be inside the paper or the quote
    const inside = this.props.width === "xs" ? true : false

    return (
    <Container>
      <Paper elevation={3} id="quoteBox">
        
      { inside && <LightDark outside={false} /> /* Only show if window is large enough */ }

        <Box p={4} px={5}>
          
          <QuoteText quote={this.state.quote} />

          &nbsp;
          <Divider />
          &nbsp;

          <Grid container justify="space-between" >
              
            <Grid item>
                <SocialIcons quote={this.state.quote} />
            </Grid>
              
            <Grid item>
              <Button variant="contained" color="primary"  onClick={this.getQuote}>
                New quote
              </Button>
            </Grid>
              
          </Grid>
        </Box>

      </Paper>
    </Container>
    )
  }
}

// Map the result of "quote reducer.quotes to "quotes" prop
const mapStateToProps = (state) => { 
  return {quotes: state.quote.quotes}
}

export default withStyles(styles, { withTheme: true })(withWidth()(connect(mapStateToProps)(Presentational)))
