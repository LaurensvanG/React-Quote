import React, { useEffect, useState } from "react";
import { Typography, makeStyles, Box, Fade } from "@material-ui/core";
import FormatQuoteRounded from "@material-ui/icons/FormatQuoteRounded";
import { connect } from "react-redux";

import "./Animation.css"

const useStyles = makeStyles(theme => ({
    quoteIcon: {
        transform: "scale(-1, -1) translateY(-.25em)",
        fontSize: "1.2em",
        color: theme.palette.primary.main,
        transition: "color 2s, fontSize 2s"
    },
    
    text: {
        textAlign: "center",
        transition: "color 1.5s"
    },
    author: {
        fontStyle: "italic",
        textAlign: "end",
        transition: "color 1.5s, opacity 2s"
    },
    box: {
        
    } 
  }));



const QuoteText = (props) => {
    console.log(props.fetching)
    const classes = useStyles();
    const [quote, setQuote] = useState("")
    const [show, updateShow] = useState(true)
    useEffect(() => {
        updateShow(false);
        setTimeout(() => {
            updateShow(true)
            setQuote(props.quote)}, 2000);
        return () => updateShow(false)
    }, [props.quote])


    return ( 
        <Box className={classes.box} >

            <Typography variant="h1" className={classes.text} gutterBottom >

                <FormatQuoteRounded className={
                    classes.quoteIcon + " " + (props.fetching ? "fetching" : "")
                } />
                            
        
                <Fade in={show} timeout={1000} >
                    <span >
                        {quote.text ? quote.text : ""}
                    </span>
                </Fade>

            </Typography>

            <Fade in={(quote.author ? true : false) && show} timeout={1500} >
                <Typography variant="h4" id="author" className={classes.author} >
                    {quote.author ? "— " + quote.author : ""}
                </Typography>
            </Fade>
            
        </Box>  
    )
}


const mapStateToProps = (state) => { return { fetching: state.quote.fetching } }
export default connect(mapStateToProps)(QuoteText)