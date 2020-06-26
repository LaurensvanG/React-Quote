import { Button, Grid, IconButton } from "@material-ui/core"
import TwitterIcon from "./TwitterIcon"
import TumblrIcon from "./TumblrIcon"


export default SocialIcons = () =>{

  return (
    <Grid container>
      <Grid item>
        <TwitterIcon />
      </Grid>
    

      <Grid item>
        <TumblrIcon />
      </Grid>
    </Grid>
  )
}
