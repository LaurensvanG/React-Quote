import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import {  IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'


const useStyles = makeStyles(theme => ({
    round: {
      width: "1em",
      color: theme.palette.type === "dark" ? theme.palette.secondary.main : theme.palette.primary.main
    }     
  }));


export default (props) => {
    const classes = useStyles()

    return (
        <IconButton aria-label="Tumblr" className={classes.round} title="Tweet the current quote" target="_blank" rel="noopener"
        href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + 
        (props.quote ? props.quote.author : "") + 
        "&content=" + (props.quote ? props.quote.text : "") + 
        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} >
    
            <FontAwesomeIcon icon={faTumblr} className="icon" />
        </IconButton>
    )

}