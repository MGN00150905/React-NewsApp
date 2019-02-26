import React, { Fragment} from 'react';
import Header from "./Components/Header";
import SourceCard from "./Components/SourceCard";
import Footer from './Components/Footer';
import Toggle from './ToggleRPC';
import login from './Components/login.png';
import Portal from './Portal';
import './CSS/App.css';

// What is being used to fetch the data
import axios from "axios";

// Outer component that will contain source cards
class Sources extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        sources: [],
      };
    }

    // Runs when component is mounted
    componentDidMount() {
      // Get Sources
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
            {/*Anything inside the Toggle brackets is defined as the children prop
            Children is a function that is being passed 'on' and 'toggle'*/}
            <Toggle>
              {({on, toggle}) => (
                <div>
                  {on && <Header  />}
                  <button className="button is-white is-fullwidth bHeight" onClick = {toggle}><h1 className = "subtitle is-5"><img alt = "img" className="imgsize3" src={login} /></h1></button>
                </div>
              )}
            </Toggle>

            {/* Source cards*/}
            <div className="columns is-multiline">{sourceList}</div>

            {/* Rendering the footer from the 'portal' as opposed to rendering from 'root'*/}
            <Portal>
              <Footer />
            </Portal>
          </Fragment>
          );
  }
}
export default Sources;
