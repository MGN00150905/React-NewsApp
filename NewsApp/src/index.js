
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Brexit from './Brexit'
import Syria from './Syria'
import Bitcoin from './Bitcoin'
import Sources from './Sources'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import worldwide from './Components/worldwide.svg';




//React Router
/* Routing each different page in the bulma navbar template using BrowserRouter*/
class Routing extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <div className="container">
      <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
         <a className="navbar-item" href="/">
           <h1 className = "subtitle is-5 col">GLOBAL NEWS</h1>
         </a>

         <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
           <span aria-hidden="true"></span>
         </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item ">
                <Link className = "col" to = "/">Top Headlines</Link>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link col">
                  Popular
                </div>

                <div className="navbar-dropdown">
                  <div className="navbar-item">
                  <Link className = "col" to = "/brexit">Brexit</Link>
                  </div>
                  <div className="navbar-item">
                  <Link className = "col" to = "/syria">Syria</Link>
                  </div>
                  <div className="navbar-item">
                  <Link className = "col" to = "/bitcoin">Bitcoin</Link>
                  </div>
                </div>
                </div>

              <div className="navbar-item col">
                <Link className = "col" to = "/sources">Sources</Link>
              </div>

            </div>
            <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              <img alt = "img" className="imgsize2" src={worldwide} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Route exact path = "/" component = {App}/>
      <Route  path = "/brexit" component = {Brexit}/>
      <Route  path = "/syria" component = {Syria}/>
      <Route  path = "/bitcoin" component = {Bitcoin}/>
      <Route  path = "/sources" component = {Sources}/>
      </div>
      </BrowserRouter>
    );
  }
}
//I do not have to render <App/> after <Routing /> because app will render at the base path which is '/'. 
ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);
