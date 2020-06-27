import React from "react";
import { connect } from "react-redux";
// import "../../styles/Quote.sass"
import { Paper, Grid, Button, Container } from "@material-ui/core";
import SocialIcons from "./SocialIcons";
import QuoteText from "./QuoteText";


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
    console.log("Quote state", this.state.quote)
    return (
    <Container className="full-height justify-content-around" fluid>
      <Paper elevation={3} id="quoteBox">
        <QuoteText quote={this.state.quote} />


        <Grid container>
          <Grid item>
            <SocialIcons quote={this.state.quote} />
          </Grid>
          
          <Grid>
            <Button variant="contained"  onClick={this.getQuote}>
              New quote
            </Button>
          </Grid>
          
        </Grid>
      </Paper>
    </Container>
    )
  }
}

// Map the result of "quote reducer.quotes to "quotes" prop
const mapStateToProps = (state) => { 
  return {quotes: state.quote.quotes}
}

export default connect(mapStateToProps)(Presentational)
