import React, { Fragment} from "react";


// Card Component for each Source
// Attempting to change the first letter of Category to upper case To distinguish from the string beside it.
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
