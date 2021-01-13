import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import categoryPage from './components/categoryPage';
import  itemPage  from './components/itemPage';
import { Footer } from './components/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categoryPage" component={categoryPage} />
            <Route exact path="/itemPage/:productId" component={itemPage} />
            <Route exact path="/Cart" component={Cart} />
          </Switch>
          <Footer />
        </div>

      </Router>
    );
  }
}

export default App;
