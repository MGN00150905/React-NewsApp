import React, {Fragment} from 'react';
import worldwide from './worldwide.svg'; // with import


class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <section className=" hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                  Your global news archive
                </h1>
                <h2 className="subtitle">
                  Explore top news articles from all over the world.
                </h2>
                <img alt = "img" className="imgsize" src={worldwide} />
                <div className="buttons center marge">
                  <div className="button is-primary">
                    <strong>Sign up</strong>
                  </div>
                  <div className="button is-light">
                    Log in
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
    );
  }
}

export default Header;
