import React from "react"
import {  IconButton } from "@material-ui/core"
import Twitter from "@material-ui/icons/Twitter"


export default (props) => {
    return (
        <IconButton aria-label="Twitter" className="mr-2 btn-lg" title="Tweet the current quote" target="_blank" rel="noopener"
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp
            &text=${props.quote ? `"${props.quote.text}" — ${props.quote.author}` : ""}`}>
    
            <Twitter />
        </IconButton>
    )
}
