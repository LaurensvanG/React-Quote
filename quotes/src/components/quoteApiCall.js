const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Set default state
const defaultState = {
  fetching: false,
  quotes: []
}

// Create api call actions
export const apiCall = createAsyncThunk(
    "quote/callApi",
    async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const quotes = response.json();
        return quotes
    }
)

// Create the slice to handle the api calls
const quoteSlice = createSlice({
    name: "quote",
    initialState: defaultState,
    extraReducers: {
        [apiCall.pending]: state => {state.fetching = true},
        [apiCall.rejected]: state => {state.fetching = true},
        [apiCall.fulfilled]: (state, action) => {
            state.fetching = false
            state.quotes = action.payload
        }
    }
})

// Export the reducer to use in store.js
export default quoteSlice.reducer;