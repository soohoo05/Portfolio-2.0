import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="wholeForm">
        <h1 className="Header">Contact me</h1>
        <div className="aboutDiv">
          <a href="mailto:tyler.soohoo@gmail.com">
            <p className="email">tyler.soohoo@gmail.com</p>
          </a>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {};
export default Contact;
