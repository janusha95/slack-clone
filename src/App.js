import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </>
      </Router> */}
      <Routes>
        {/* <Header />
        <AppBody>
          <Sidebar /> */}
        <Route path="/" element={<Home />} />
        {/* </AppBody> */}
      </Routes>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
