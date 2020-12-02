import React from "react";
import Covid from "./Components/Covid";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* <Toolbar /> */}
      <Route path="/" exact={true} component={Covid} />
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/movie-detail" component={Detail} /> */}
    </HashRouter>
  );
}

export default App;
