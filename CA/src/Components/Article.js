import React, {Fragment} from "react";
import LikeButton from "./LikeButton.js"
import Moment from 'moment';


class Article extends React.Component {




  render() {
    Moment.locale('en');
    return (
      <Fragment>
        <div className="column is-3">
          <div className="card height">
            <div className="card-image">
              <figure className="image is-4by3">
                <img alt={this.props.title} src={this.props.image} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-6">{this.props.name}</p>
                  <time dateTime={this.props.time}>{Moment(this.props.time).format('DD MMM')}</time>
                  <p className="subtitle">{this.props.author}</p>
                  <a href = {this.props.url} target=" ">Article link</a>
                </div>
              </div>
              <LikeButton />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;
