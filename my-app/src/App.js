import React from 'react';
import './styles/App.scss';
import store from "./app/store";
import { Container, ThemeProvider } from 'react-bootstrap';

// Own functions
import NewButton from "./features/button/button";
import {Quote} from "./features/quote/quote";
import { apiCall } from "./features/quote/quoteApi";
import theme, { getCurrentTheme, initThemeObserver } from "./theming/themeColours";


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      theme: "pickledBluewood"
    }
    this.themeObserver = initThemeObserver(this.onThemeChange);
  }
  
  

  // Theme control
  componentDidMount() {
    // Call the quotes api to get quotes async
    store.dispatch(apiCall());
  }
  // componentWillUnmount() {
  //   if (this.themeObserver) this.themeObserver.disconnect();
  // }

  // onThemeChange = () => {
  //   this.forceUpdate(); // propagates any theme color changes on the js side down through the whole app
  // };

  toggleThemeType = this.setState((state, props) => {
    document.querySelector("html");
    return {theme: props.theme}
  })

  // Render the app
  render() {return (
    <ThemeProvider id="App" ref={ref => this.appRef = ref} theme={this.state.theme}>
      <header className="app-header">
      </header>
      <div>
        <Container className="full-height flex-column justify-content-around">
          <NewButton toggleThemeType={this.toggleThemeType} />
          <Quote />
        </Container>
        
      </div>
    </ThemeProvider>
  )};
}

export default App;
