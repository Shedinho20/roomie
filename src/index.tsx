import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
