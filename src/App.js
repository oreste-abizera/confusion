import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/MainComponent";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
export default class App extends Component {
  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Main></Main>
          </div>
        </Router>
      </Provider>
    );
  }
}
