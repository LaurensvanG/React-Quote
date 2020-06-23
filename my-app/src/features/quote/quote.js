import React from "react";
import { connect } from "react-redux";


class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }

    this.getQuote = this.getQuote.bind(this)
  }

  
  getQuote = () => { 
    return (this.setState((state, props) => {
      return {quote: props.quotes[Math.floor(Math.random() * props.quotes.length)],
      quotes: state.quotes}
    })
    )
  }

  render () {
    // useSelector with reducer "state.quote"
    // const quotes = useSelector(state => state.quote.quotes)
    console.log("All quotes", this.state.quotes, this.state.quote)

    return (
    <div className="row align-items-center">
      
      <div className="col-3" />
      <div id="quote-box" className="card col-6">
        <div id="text" className="text-center">
          <h1>{this.state.quote ? this.state.quote.text : ""}</h1>
        </div>
        <div id="author" className="text-right">
          <h4>- {this.state.quote ? this.state.quote.author : ""}</h4>
        </div>
        <button className="btn btn-primary col-2 justify-self-end" onClick={this.getQuote}>
          New quote
        </button>
      </div>
      <div className="col-3" />
      
      </div>
    )
  }
}

// Map the result of "quote reducer.quotes to "quotes" prop
const mapStateToProps = (state) => { 
  return {quotes: state.quote.quotes}
}

export const Quote = connect(
  mapStateToProps
)(Presentational)