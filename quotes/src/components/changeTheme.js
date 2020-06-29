import React from "react";
import { createAction, createSlice } from "@reduxjs/toolkit";
import theme from "../styles/theme";
import getColourStyle from "../styles/rotatingStyles"
import { createMuiTheme } from "@material-ui/core";

export const changeTheme = createAction("theme/changeTheme")


const changeThemeSlice = createSlice({
    name: "theme",
    initialState: theme,
    reducers: {
        [changeTheme]: (state) => {
            console.log(state.theme)
            const newTheme = function(type){ createMuiTheme(getColourStyle(type))};
            state.theme = newTheme
        }
    }
})


export default changeThemeSlice.reducer;