import React, { Fragment} from "react";
import Article from "./Components/Article";
import Header from "./Components/Header";
import DropDown from './Components/DropDown';
import SearchInput from "./Components/SearchInput";
import Toggle from './ToggleRPC';
import login from './Components/login.png';
import Portal from './Portal';


import './CSS/App.css';

// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

// 'Outer' component that will contain all the User 'cards'
class Bitcoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      query: '',
      sourceSelected: 'all',
      sourceValues: [],
      news: [],
      searchText: ''
    };
    this.handleChange = this.handleChange.bind(this);

  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data new articles
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=47fdf75d8e5140c58df99e9bf41065e7`;
    axios
      .get(url)
      .then(response => {
        // GET request was successful, store the users in state
        this.setState({ news: response.data.articles });
        // sort and remove duplicate nationalities
        // store the result in state to be used for the dropdown menu options
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
    // handle both of the <select> UI elements
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  render() {
    let articleList = this.state.news.map(item => {
      const sourceMatch = (this.state.sourceSelected === item.source.name || this.state.sourceSelected === 'all');
      const titleMatch = item.title.toLocaleLowerCase().startsWith((this.state.searchText));
      return (titleMatch && sourceMatch) ?
      (
      <Article
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
        <Toggle>
          {({on, toggle}) => (
            <div>
              {on && <Header  />}
              <button className="button is-white is-fullwidth bHeight" onClick = {toggle}><h1 className = "subtitle is-5"><img alt = "img" className="imgsize3" src={login} /></h1></button>
            </div>
          )}
        </Toggle>
        <div className = "section">
          <DropDown options={['all'].concat(this.state.sourceValues)} name="sourceSelected"
          handleChange={this.handleChange} label="Filter by source name" selected={this.state.sourceSelected} />

          <SearchInput name="searchText" label="Search by title"
          value={this.state.searchText} handleChange={this.handleChange} placeholder={"e.g. trump"} />
        </div>
        <div className="columns is-multiline">{articleList}</div>
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



export default Bitcoin;
