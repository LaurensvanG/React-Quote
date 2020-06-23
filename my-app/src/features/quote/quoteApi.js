const { createAction, createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Set default state
const defaultState = {
  fetching: false,
  quotes: []
}

// Create api call actions
export const apiFetch = createAction("quote/fetchApi")

export const apiCall = createAsyncThunk(
    "quote/callApi",
    async () => {
        const response = await fetch("https://type.fit/api/quotes");
        const quotes = response.json();
        // console.log("Quotes", quotes)
        return quotes
    }
)

// Create the slice to handle the api calls
const quoteSlice = createSlice({
    name: "quote",
    initialState: defaultState,
    reducers: {
        [apiFetch]: (state, action) => state.fetching = true,
    },
    extraReducers: {
        [apiCall.fulfilled]: (state, action) => {
            state.fetching = false
            state.quotes = action.payload
        }
    }
})

// Export the reducer to use in store.js
export default quoteSlice.reducer;


// const apiFetch => () {
//   return  {
//     type: FETCHING_API,
//     fetching: true,
//     quotes: []
//   }
// }

// const apiReceived => (quotes) {
//   return {
//     type: API_RECEIVED,
//     fetching: false,
//     quotes: [quotes]
//   }
// }

// const asyncApiFetch = () => {
//   return (dispatch) => {
//     dispatch(apiFetch());
//     async quotes = () => {
//       return await fetch("https://type.fit/api/quotes")
//     }
//     console.log(quotes);
//     dispatch(apiReceived(quotes));
//   }
// }

// const fetchReducer => (state = defaultState, action) => {
//   switch(action.type) {
//     case(FETCHING_API):
//       return {fetching: true, quotes=[]}
//     case(RECEIVED_API):
//       return {fetching: false, quotes=[...state.quotes, action.quotes]}
//     default:
//       return state
//   }
// }