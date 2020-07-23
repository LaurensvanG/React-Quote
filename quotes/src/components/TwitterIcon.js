import React from "react"
import {  IconButton, makeStyles } from "@material-ui/core"
import Twitter from "@material-ui/icons/Twitter"

const useStyles = makeStyles(theme => ({
    twitter: {
        color: theme.palette.type === "dark" ? theme.palette.secondary.main : theme.palette.primary.main
    }
}))

export default (props) => {
    const classes = useStyles()

    return (
        <IconButton aria-label="Twitter" className={classes.twitter} title="Tweet the current quote" target="_blank" rel="noopener"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp
            &text=${props.quote ? `"${props.quote.text}" — ${props.quote.author}` : ""}`}>
    
            <Twitter />
        </IconButton>
    )
}
