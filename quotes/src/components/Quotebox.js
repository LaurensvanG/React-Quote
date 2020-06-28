import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, Button, Container, createStyles, withStyles, Box } from "@material-ui/core";
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

  // Get a first quote as soon as the quotes have been fetched and passed through the prop
  componentDidUpdate(prevProps) {
    if(prevProps.quotes !== this.props.quotes)
    if(this.props.quotes !== undefined && this.props.quotes.length !== 0) this.getQuote()
  }

  render () {

    return (
    <Container>
      <Paper elevation={3} id="quoteBox">
        <Box p={4}>
          <QuoteText quote={this.state.quote} />
        
          <Grid container justify="space-between" >
              
            <Grid item>
                <SocialIcons quote={this.state.quote} />
            </Grid>
              
            <Grid>
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
