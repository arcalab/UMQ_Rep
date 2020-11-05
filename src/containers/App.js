import React from 'react';
import Nav1 from '../components/Nav';
import Footer from '../components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // must import this AND npm install
import HomePage from './HomePage';
import Search from '../components/Search';
import Item from '../components/Item';
import Header1 from '../components/Header.js'


function App() {
  return (
    <div>
        <Nav1 /> 
        <Header1 />
        <Router>
         <Switch>
          <Route path="/quantumsoftwareengineering/search">
           <Search />
          </Route>
          <Route path="/quantumsoftwareengineering/item">
            <Item />
          </Route>
          <Route path="/quantumsoftwareengineering/">
           <HomePage/>
          </Route>
          <Route path="/">
           <HomePage/>
          </Route>
         </Switch>
        </Router>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
