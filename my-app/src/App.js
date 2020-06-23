import React from 'react';
import './styles/App.sass';
import NewButton from "./features/button/button"
import {Quote} from "./features/quote/quote"
import store from "./app/store"
import { apiCall } from "./features/quote/quoteApi"
import { Container } from 'react-bootstrap';


function App() {
  // Call the quotes api to get quotes async
  store.dispatch(apiCall());

  // Render the app
  return (
    <div id="App">
      <header className="app-header">
      </header>
      <div>
        <Container className="full-height flex-column justify-content-around">
          <NewButton />
          <Quote />
        </Container>
        
      </div>
    </div>
  );
}

export default App;
