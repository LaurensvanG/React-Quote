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


export default (props) => {
    const classes = useStyles()

    return (
        <IconButton aria-label="Twitter" className="mr-2 btn-lg" title="Tweet the current quote" target="_blank" rel="noopener"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp
            &text=${props.quote ? `"${props.quote.text}" — ${props.quote.author}` : ""}`}>
    
            <Twitter />
        </IconButton>
    )
}
