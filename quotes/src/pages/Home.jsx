import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainConent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));


export default () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <SideMenu />
      <MainContent />
    </div>
  );
}
