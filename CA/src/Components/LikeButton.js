import React from 'react';

class LikeButton extends React.Component {
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
