import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'
import About from './About'
//import react-route-dom node module with BrowserRouter as Router and the Route components
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home< /NavLink>
      <NavLink to="/about" exact style={link} activeStyle={{background: 'red'}}>About< /NavLink>
      <NavLink to="/login" exact style={link} activeStyle={{background: 'yellow'}}>Login< /NavLink>
    </div>
  )
}
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

//  {/*//we define 3 possible routes, each of which is doing the following:
//   1. defining what url to match on
//   2. defining what component should be rendered
//   3. setting an attribute of exact, which explicitly states that you will only see the rendered comp if you go to those router*/}

//  {/*return Router as top level component in out React application*/}

ReactDOM.render((
  <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path='/' render={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
  </Router>),
  document.getElementById('root')
)
