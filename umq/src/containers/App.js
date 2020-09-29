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
import welcome from '../text/welcome.json';


function App() {
  return (
    <div>
        <Nav1 /> 

        <Router>
         <Switch>
          <Route path="/">
           <HomePage title={welcome.title} body={welcome.body}/>
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
