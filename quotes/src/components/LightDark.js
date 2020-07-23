import React from "react";
import { connect } from "react-redux";
import store from "../app/store";

import Brightness4TwoTone from "@material-ui/icons/Brightness4TwoTone"
import Brightness7 from "@material-ui/icons/Brightness7"
import { makeStyles } from "@material-ui/core";
import { changeType } from "./changeTheme";


const useStyles = makeStyles(theme => ({
    outside: {
      position: "fixed",
      fontSize: "2rem",
      right: "1rem",
      top: "1rem",
      transition: "color 2s"
    },
    inside: {
      boxSizing: "content-box",
      float: "right",
      fontSize: "1.5rem",
      padding: 10,
      transition: "color 2s"
    },
    hidden: {
      display: "none",
      transition: "opacity .3s"
    },
    visible: {
      focusable: "true",
      transition: "opacity .3s"
    }
  }));

const LightDark = (props) => {
    const classes = useStyles()
    const outside = props.outside
    const dark = props.type === "dark" ? true : false;
    const onClickHandler = () => store.dispatch(changeType())

    return (
          <div>
            
              <Brightness4TwoTone onClick={onClickHandler} title="Switch dark/light mode"
              aria-label={dark ? "Turn on light mode" : ""} aria-hidden={!dark} focusable={dark}
              className={ 
                (outside ? classes.outside : classes.inside) + " " +
                (dark ? classes.visible : classes.hidden)
              } />

            
            <Brightness7 onClick={onClickHandler} title="Switch dark/light mode" disableRipple="false"
            aria-label={!dark ? "Turn on light mode" : ""} aria-hidden={dark} focusable={!dark}
              className={ 
                (outside ? classes.outside : classes.inside) + " " +
                (!dark ? classes.visible : classes.hidden)
              } />
          </div>
    )
}



const mapStateToProps = (state) => { 
  return {type: state.theme.type}
}

export default connect(mapStateToProps)(LightDark)