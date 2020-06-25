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
    this.getQuote = this.getQuote.bind(this);
  }
  
  // Set the "quote" in state to a random quote from "props.quotes"
  componentDidMount() {
    
  }

  getQuote = () => this.setState((state, props) => {
    return {quote: props.quotes[Math.floor(Math.random() * props.quotes.length)],
    quotes: state.quotes}
  })
  

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
                    <Row id="socials btn-group-lg btn-group-vertical">

                      <Button id="tweet-quote" className="mr-2 btn-lg" title="Tweet the current quote" target="_blank"
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp
                          &text=${this.state.quote ? `"${this.state.quote.text}" — ${this.state.quote.author}` : ""}`}>
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                      </Button>

                      <Button id="tumblr" className="btn-lg" title="Post the current quote on Tumblr" target="_blank"
                        href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + 
                          (this.state.quote ? this.state.quote.author : "") + 
                          "&content=" + (this.state.quote ? this.state.quote.text : "") + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"}>
                        <FontAwesomeIcon icon={faTumblr} className="icon" />
                      </Button>

                    </Row>
                    
                    <Button className="btn-lg" onClick={this.getQuote}>
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

export const Quote = connect(
  mapStateToProps
)(Presentational)