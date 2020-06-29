import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, Button, Container, createStyles, withStyles, Box, Divider } from "@material-ui/core";
import SocialIcons from "./SocialIcons";
import QuoteText from "./QuoteText";

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
  
  // Set the "quote" in state to a random quote from "props.quotes"
  getQuote = () => { 
    return (this.setState((state, props) => {
      return {quote: props.quotes[Math.floor(Math.random() * props.quotes.length)],
      quotes: state.quotes}
    })
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.quote) {
      if(this.state.quote.text !== nextState.quote.text || this.props.quotes.text !== nextProps.quotes.text) {
        return true
      } else return false
    } else {
      if(this.props.quotes)  return true;
        else return false;
    }
  }
  
  // Get a first quote as soon as the quotes have been fetched and passed through the prop
  componentDidUpdate(prevProps) {
    if(!prevProps.quotes[0])
        if(this.props.quotes !== undefined && this.props.quotes.length !== 0) this.getQuote();;
  }

  render () {
    console.log("Quote", this.state.quote)
    return (
    <Container>
      <Paper elevation={3} id="quoteBox">
        <Box p={4} px={5}>

          <QuoteText quote={this.state.quote} fade={this.state.fade} />

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

export default withStyles(styles)(connect(mapStateToProps)(Presentational))
