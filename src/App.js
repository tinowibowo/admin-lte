import React, { Fragment }  from 'react';
// import logo from './logo.svg';
import Header from './component/Header';
import Menu from './component/Menu';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';
import Tagihan from './container/Tagihan';
import Transaksi from './container/Transaksi';
import Report from './container/Report';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Fragment>
        <div className="wrapper">
          <Header />
          <Menu />
          {/* <Dashboard /> */}
          <Footer />
        </div>
        <Switch>
          {/* <Route exact path="/">
              <Home />
          </Route> */}
          <Route path="/tagihan">
              <Tagihan />
          </Route>
          <Route path="/transaksi">
              <Transaksi />
          </Route>
          <Route path="/report">
              <Report />
          </Route>
      </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
