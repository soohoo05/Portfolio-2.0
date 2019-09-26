import React from 'react';

class BlogDiv extends React.Component {
  render() {
    return (
      <div className="indProject">
            <h1>{this.props.Title}</h1>
            <img onClick={()=>window.open(this.props.Link)}src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png" alt="github icon" className="githubicon"/>
            </div>
    )
  }
}
BlogDiv.propTypes = {

};
export default BlogDiv;
