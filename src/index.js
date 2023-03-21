import React from "react";
import ReactDOM from "react-dom";
 import App from "./components/App";
 import  Store  from "./app/Store";
 import { Provider } from "react-redux";
 import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
<React.StrictMode>
<Provider store={Store} >
  <App/>

  </Provider>
</React.StrictMode>,
document.getElementById("root")

);