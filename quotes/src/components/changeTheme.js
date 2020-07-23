import { createAction, createSlice } from "@reduxjs/toolkit";
import getColourStyle from "../styles/rotatingStyles"


export const changeTheme = createAction("theme/changeTheme")
export const changeType = createAction("theme/changeType")


const changeThemeSlice = createSlice({
    name: "theme",
    initialState: {
        type: "dark",
        light: "#303030",
        dark: "#3f51b5"
    },
    extraReducers: {
        [changeTheme]: state => {
            const [light, dark] = getColourStyle(state.type);
            state.dark = dark;
            state.light = light;
        },
        [changeType]: (state, action) => {
            if(typeof action.payload === "boolean") state.type = action.payload === true ? "light" : "dark"
                else state.type = state.type === "dark" ? "light" : "dark";
        }
    }
})


export default changeThemeSlice.reducer;