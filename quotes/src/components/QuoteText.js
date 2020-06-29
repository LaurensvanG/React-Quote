import React, { useEffect, useState } from "react";
import { Typography, makeStyles, Box, Fade } from "@material-ui/core";
import FormatQuoteRounded from "@material-ui/icons/FormatQuoteRounded";


const useStyles = makeStyles(theme => ({
    "quoteIcon": {
        transform: "scale(-1, -1) translateY(-.25em)",
        fontSize: "1.2em",
        
    },
    "text": {
        textAlign: "center"
    },
    "author": {
        fontStyle: "italic",
        textAlign: "end"
    },
    "box": {
        
    }
  }));



export default (props) => {
    const classes = useStyles();
    const [quote, setQuote] = useState("")
    const [show, updateShow] = useState(true)
    useEffect(() => {
        updateShow(false);
        setTimeout(() => {
            updateShow(true)
            setQuote(props.quote)}, 1000);
        return () => updateShow(false)
    }, [props.quote])


    return (

        
        <Box className={classes.box} >

            <Typography variant="h1" className={classes.text} gutterBottom >

                        <Fade in={true} timeout={3000} >
                            <FormatQuoteRounded className={classes.quoteIcon} />
                        </Fade>
        
                        <Fade in={show} timeout={2000} mountOnEnter unmountOnExit >
                            <span >
                                {quote.text ? quote.text : ""}
                            </span>
                        </Fade>

            </Typography>

            <Typography variant="h4" id="author" className={classes.author} >
                {quote.author ? "— " + quote.author : ""}
            </Typography>
            
        </Box>
        
        
    )
}

