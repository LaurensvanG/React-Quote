import React from 'react';
import './App.sass';
import NewButton from "./features/button/button"
import {Quote} from "./features/quote/quote"
import store from "./app/store"
import { apiCall } from "./features/quote/quoteApi"


function App() {
  // Call the quotes api to get quotes async
  store.dispatch(apiCall());

  // Render the app
  return (
    <div className="App">
      <header className="App-header">
        
        <NewButton />
        <Quote />
      </header>
    </div>
  );
}

export default App;
