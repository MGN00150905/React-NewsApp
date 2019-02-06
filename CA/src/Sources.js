import React, { Fragment} from 'react';
import Header from "./Components/Header";
import SourceCard from "./Components/SourceCard";
import Toggle from './ToggleRPC';
import login from './Components/login.png';
import Portal from './Portal';
import './CSS/App.css';

import axios from "axios";


class Sources extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        sources: [],
      };
    }

    // Runs when component is mounted
    componentDidMount() {
      // Get data new articles
      const url = 'https://newsapi.org/v2/sources?country=us&apiKey=47fdf75d8e5140c58df99e9bf41065e7';
      axios
        .get(url)
        .then(response => {
          // GET request was successful, store the users in state
          this.setState({ sources: response.data.sources });
        })
        .catch(err => {
          // GET failed, log the error
          console.log(err);
        });
    }


  render() {
    const sourceList = this.state.sources.map(src => (
      <SourceCard
        key={src.id}
        name={src.name}
        desc={src.description}
        url={src.url}
        cat={src.category}
      />
    ));

    return(
          <Fragment>
            <Toggle>
              {({on, toggle}) => (
                <div>
                  {on && <Header  />}
                  <button className="button is-white is-fullwidth bHeight" onClick = {toggle}><h1 className = "subtitle is-5"><img alt = "img" className="imgsize3" src={login} /></h1></button>
                </div>
              )}
            </Toggle>
            <div className="columns is-multiline">{sourceList}</div>
            <Portal>
             <footer className="footer">
                <div className="content has-text-centered">
                  <p>
                    <strong>News Now</strong> by <a href="https://github.com/MGN00150905">Marc Gallagher</a>. The source code is licensed
                    <a href="http://iadt.ie">IADT</a>. The website content
                    is hopefully licensed <a href="http://iadt.ie">12345</a>.
                  </p>
                </div>
              </footer>
            </Portal>
          </Fragment>
          );
  }
}
export default Sources;
