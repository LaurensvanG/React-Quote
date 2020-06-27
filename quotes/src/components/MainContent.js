import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

export default () => {
    const classes = useStyles();
  
    return (
      <main className={classes.fullWidth}>
        <div className={classes.toolbar} />
        <div className={classes.title}>
          <Typography variant='h6'>Title</Typography>
        </div>
        <div className={classes.content}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
            nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
            felis nec erat
          </Typography>
        </div>
      </main>
    );
}