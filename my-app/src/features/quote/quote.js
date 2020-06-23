import React from "react";
import { connect } from "react-redux";
import "../../styles/Quote.module.sass"
import { Container, Row, Col, Card, Button } from "react-bootstrap"


class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
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
    <Container className="full-height justify-content-around" fluid>
        <Row id="#quoteBox" className="justify-content-center align-items-center full-height">

            <Col lg={3} />

            <Col lg={6}>
              <Card>
                <div id="#text" className="text-center full-height">
                  <h1>{this.state.quote ? this.state.quote.text : ""}</h1>
                </div>
                <div id="author" className="text-right">
                  <h4>- {this.state.quote ? this.state.quote.author : ""}</h4>
                </div>
                <Button className="btn-primary col-2 justify-self-end" onClick={this.getQuote}>
                  New quote
                </Button>
              </Card>

            </Col>

            <Col lg={3} />

        </Row>
    </Container>
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