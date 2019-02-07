import React, {Fragment} from 'react';

class Footer extends React.Component{
  render() {
    return (
      <Fragment>
        <footer className="footer">
           <div className="content has-text-centered">
             <p>
               <strong>News Now</strong> by <a href="https://github.com/MGN00150905">Marc Gallagher</a>. The source code is licensed
               <a href="http://iadt.ie">IADT</a>. The website content
               is hopefully licensed... I think.
             </p>
           </div>
         </footer>
      </Fragment>
     );
  }
}

export default Footer;
