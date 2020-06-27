import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    fullWidth: {
      width: '100%',
    },
  }));



export default (props) => {
    const classes = useStyles()

    console.log(props.quote)
    return (
        <Container>
            <Typography variant="h1">
                {props.quote.text}
            </Typography>
        </Container>
    )
}

