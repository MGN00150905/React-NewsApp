import React from 'react';

class LikeButton extends React.Component {
  //Two state, likes -  to record how many times it has been liked
  //liked - To check if the user has liked it already - if so the button changes to 'Unlike' with the booleeen of TRUE
  //Likes seems to be be redundant seeing as it will increment no matter how many times the button is clicked.
  constructor() {
    super();
    this.state = {
      likes: 0,
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }

  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'
    return (
        <button className="button is-link" onClick={this.handleClick}>&hearts; &nbsp;
          {label}</button>
    );
  }
}

export default LikeButton;
