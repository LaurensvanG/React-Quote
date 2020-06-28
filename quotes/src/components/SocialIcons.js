import React from "react"
import Grid from "@material-ui/core/Grid"
import TwitterIcon from "./TwitterIcon"
import TumblrIcon from "./TumblrIcon"


export default (props) =>{
  return (
    <Grid container>
      <Grid item>
        <TwitterIcon quote={props.quote} />
      </Grid>
    

      <Grid item>
        <TumblrIcon quote={props.quote} />
      </Grid>
    </Grid>
  )
}
