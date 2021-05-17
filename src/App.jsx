import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "pages/MainPage/MainPage";
import MainHeader from "components/MainHeader/MainHeader";
import MainFooter from "components/MainFooter/MainFooter";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
        <MainFooter />
      </Router>
    </div>
  );
};

export default App;
