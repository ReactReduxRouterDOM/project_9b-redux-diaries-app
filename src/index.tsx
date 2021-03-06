import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import startServer from "./app/server";
import EditNote from "./pages/EditNote";

// Comment!
startServer();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: orange[900],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes/create" element={<CreateNote />} />
            <Route path="/notes/edit" element={<EditNote />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
