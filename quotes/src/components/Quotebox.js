import React from "react";
import { connect } from "react-redux";
import "../../styles/Quote.sass"
import { Container, Row, Col, Card, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'



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
    <Container className="full-height justify-content-around" fluid>
        <Row className="justify-content-center align-items-center full-height">

            <Col />

            <Col md={10} xl={8}>
              <Card id="quoteBox">
                
                <Col id="text" className="text-center full-height">
                    <h1>
                      <FontAwesomeIcon id="quote-icon" icon={faQuoteLeft} size="sm" /> 
                      &nbsp;
                      {this.state.quote ? this.state.quote.text : ""}
                    </h1>

                    <div id="author" className="text-right">
                      <h4>— {this.state.quote ? this.state.quote.author : ""}</h4>
                    </div>
                </Col>

                <Col >
                  <Row className="justify-content-between">
                    
                    
                    <Button className="btn-primary" onClick={this.getQuote}>
                      New quote
                    </Button>
                  </Row>
                </Col>
              </Card>
            </Col>
            <Col />
        </Row>
    </Container>
    )
  }
}

// Map the result of "quote reducer.quotes to "quotes" prop
const mapStateToProps = (state) => { 
  return {quotes: state.quote.quotes}
}

export const QuoteBox = connect(
  mapStateToProps
)(Presentational)



const { createAction, createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Set default state
const defaultState = {
  fetching: false,
  quotes: []
}

// Create api call actions
export const apiFetch = createAction("quote/fetchApi")

export const apiCall = createAsyncThunk(
    "quote/callApi",
    async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const quotes = response.json();
        // console.log("Quotes", quotes)
        return quotes
    }
)

// Create the slice to handle the api calls
const quoteSlice = createSlice({
    name: "quote",
    initialState: defaultState,
    reducers: {
        [apiFetch]: (state, action) => state.fetching = true,
    },
    extraReducers: {
        [apiCall.fulfilled]: (state, action) => {
            state.fetching = false
            state.quotes = action.payload
        }
    }
})

// Export the reducer to use in store.js
export default quoteSlice.reducer;


const apiFetch => () {
  return  {
    type: FETCHING_API,
    fetching: true,
    quotes: []
  }
}

const apiReceived => (quotes) {
  return {
    type: API_RECEIVED,
    fetching: false,
    quotes: [quotes]
  }
}

const asyncApiFetch = () => {
  return (dispatch) => {
    dispatch(apiFetch());
    async quotes = () => {
      return await fetch("https://type.fit/api/quotes")
    }
    console.log(quotes);
    dispatch(apiReceived(quotes));
  }
}

const fetchReducer => (state = defaultState, action) => {
  switch(action.type) {
    case(FETCHING_API):
      return {fetching: true, quotes=[]}
    case(RECEIVED_API):
      return {fetching: false, quotes=[...state.quotes, action.quotes]}
    default:
      return state
  }
}