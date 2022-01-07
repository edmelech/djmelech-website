import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import MailingList from './components/pages/MailingList';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/music' exact component={Music} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/mailing-list' exact component={MailingList} />
        </Switch>  
      </Router>
    </>
  );
}

export default App;
