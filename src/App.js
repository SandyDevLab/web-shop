import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Item from './Pages/Shop/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { TshirtList } from './Components/TshirtList';
import { Cart } from './Components/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <Cart />
        <TshirtList />
      </div>
    </CartProvider>
  );
  // return (
  //   <Router>
  //     <div className="App">
  //       <Navigation />
  //       <Switch>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/about" component={About} />
  //         <Route path="/shop" exact component={Shop} />
  //         <Route path="/shop/:id" component={Item}/>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
