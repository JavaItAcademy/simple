import React, {Component} from 'react';
import Header from './components/Header';
import List from './pages/List';
import Overview from './pages/Overview';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div>
        <Header title={"This is new title"}/>
        <Router>
            <Route path={'/list'} component={List}/>
            <Route path={'/show/:id'} component={Overview}/>
        </Router>

    </div>);
  }
}

export default App;
