import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    "box": {
      paddingBottom: 50
    },
    "author": {
        fontStyle: "italic",
        textAlign: "end"
    }
  }));



export default (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.box} >
            <Typography variant="h1">
                {props.quote.text}
            </Typography>

            <Typography variant="h4" id="author" className={classes.author}>
                — {props.quote.author}
            </Typography>
        </Box>
    )
}

