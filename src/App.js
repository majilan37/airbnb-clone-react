import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Switch} from 'react-router-dom'
import Search from "./pages/Search";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="">
        <Switch>
          <Route exact path='/' >
            <Header />
            <Banner />
            <Main />
          </Route>
          <Route exact path='/search' >
            <Search />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
