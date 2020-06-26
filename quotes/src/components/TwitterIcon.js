import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton } from "@material-ui/core"
import Twitter from "@material-ui/icons/Twitter"


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    fullWidth: {
      width: '100%',
    },
  }));


export default TwitterButton = () => {
    const classes = useStyles()

    return (
        <IconButton aria-label="Twitter" className="mr-2 btn-lg" title="Tweet the current quote" target="_blank"
            ref={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp
            &text=${this.state.quote ? `"${this.state.quote.text}" — ${this.state.quote.author}` : ""}`}>
    
            <Twitter />
        </IconButton>
    )
}
