import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'


const useStyles = makeStyles(theme => ({
    round: {
      width: "1em"
    }
  }));


export default (props) => {
    const classes = useStyles()

    return (
        <IconButton  className={classes.round} title="Tweet the current quote" target="_blank" rel="noopener"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp 
            &text=${props.quote ? `"${props.quote.text}" — ${props.quote.author}` : ""}`}>
    
            <FontAwesomeIcon icon={faTumblr} className="icon" />
        </IconButton>
    )

}
