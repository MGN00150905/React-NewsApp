import React, { Fragment} from "react";
import Article from "./Components/Article";
import Header from "./Components/Header";
import DropDown from './Components/DropDown';
import SearchInput from "./Components/SearchInput";
import Footer from './Components/Footer';
import Toggle from './ToggleRPC';
import Portal from './Portal';
import login from './Components/login.png';

import './CSS/App.css';

// What is being used to fetch the data
import axios from "axios";

// Outer component that will contain top headline articles
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      // news1: {
      //   type: 'top-headlines',
      //   query: 'sources=bbc-news'
      // },
      // news2: {
      //   type: 'everything',
      //   query: 'domains=techcrunch.com&language=en'
      // },
      sourceSelected: 'all',
      sourceValues: [],
      news: [],
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  // Runs when component is mounted
  componentDidMount() {
    // Get new article data
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=47fdf75d8e5140c58df99e9bf41065e7`;
    axios
      .get(url)
      .then(response => {
        // GET request was successful, store the news in state
        this.setState({ news: response.data.articles });
        // remove any duplicate sources
        // store the result in sourceValues[ ] to be used for the dropdown menu
        const srcName = this.state.news.map(item => {
          return item.source.name;
        });
        const deduped = [...new Set(srcName)];
        deduped.sort();
        this.setState({sourceValues: deduped});
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }


  handleChange(event) {
    // handles UI input values such as search and dropdown
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    //Render the articles based on what has been selecte or searched
    //If a particlar source is selected. Only render aricles relating to the selected source.
    //Changing article titles to lowercase before filtering so the search is not case sesitive
    let articleList = this.state.news.map(item => {
      const sourceMatch = (this.state.sourceSelected === item.source.name || this.state.sourceSelected === 'all');
      const titleMatch = item.title.toLocaleLowerCase().startsWith((this.state.searchText));
      return (titleMatch && sourceMatch) ?
      (
      <Article
        //Key is url as each one is uniuque
        key={item.url}
        name={item.title}
        image={item.urlToImage}
        author={item.source.name}
        url={item.url}
        time={item.publishedAt}
      /> ) : null;
    });

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
          <div className = "section">
            {/* Concatinating source names to the dropdown options, stores the selected source in state*/}
            <DropDown options={['all'].concat(this.state.sourceValues)} name="sourceSelected"
            handleChange={this.handleChange} label="Filter by source name" selected={this.state.sourceSelected} />

            {/* Search Component*/}
            <SearchInput name="searchText" label="Search by title"
            value={this.state.searchText} handleChange={this.handleChange} placeholder={"e.g. trump"} />
          </div>

          {/* News Articles*/}
          <div className="columns is-multiline">
            {articleList}
          </div>
          {/* Rendering the footer from the 'portal' as opposed to rendering from 'root'*/}
          <Portal>
            <Footer />
          </Portal>
        </Fragment>
      );
  }
}



export default App;
