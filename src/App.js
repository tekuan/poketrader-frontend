import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Root from "./components/Root";
const App = () => (
  <>
    <Root />
    <ToastContainer />
  </>
);
export default App;
