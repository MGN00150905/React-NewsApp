import React, {Fragment} from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <Fragment>
        <label className="label">{this.props.label}</label>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field ">
              <div className="compWidth">
                <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} className="input" type="text" placeholder={this.props.placeholder} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchInput;
