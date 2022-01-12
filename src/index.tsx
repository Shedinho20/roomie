import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
