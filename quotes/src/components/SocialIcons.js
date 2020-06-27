import React from "react"
import { Button, Grid, IconButton } from "@material-ui/core"
import TwitterIcon from "./TwitterIcon"
import TumblrIcon from "./TumblrIcon"


export default (props) =>{
  return (
    <Grid container>
      <Grid item>
        <TwitterIcon quote={props.quote} />
      </Grid>
    

      <Grid item>
        <TumblrIcon />
      </Grid>
    </Grid>
  )
}
