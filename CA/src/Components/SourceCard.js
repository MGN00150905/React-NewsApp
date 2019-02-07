import React, { Fragment} from "react";


// Component to represent a single User 'Card' (note: this is a class component so can use state)
// Classes used below are from Bulma, see index.html above
class SourceCard extends React.Component {



  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <Fragment>
        <div className="column is-3">
          <div className="card height">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-6">{this.props.name}</p>
                  <p className="subtitle is-6">Category: {this.props.cat.substring(0).toLocaleUpperCase()}</p>
                  <a className= "button is-dark is-small" href = {this.props.url} target="">Website link</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>



    );
  }
}

// Allow this to be imported by another JS file
export default SourceCard;
