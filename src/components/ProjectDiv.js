import React from "react";
import Fade from 'react-reveal/Fade';

class ProjectDiv extends React.Component {
  state={
    seeMore:false
  }
  seeToggle = () =>{
    this.setState({
      seeMore:!this.state.seeMore
    })
  }
  render() {
    return (
      <div className="indProject">
        <div>
        {this.props.Website.length !== 0 ? (
          <h1
            onClick={() => window.open(this.props.Website)}
            className="Website projectHeader projectDivComponents"
          >
            {this.props.Name}
          </h1>
        ) : (
          <h1 className="projectHeader projectDivComponents">
            {this.props.Name}
          </h1>
        )}
        <img
          onClick={() => window.open(this.props.Link)}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github icon"
          className="githubicon projectDivComponents"
        />
        {this.props.Video.length !== 0 ? (
          <img
            onClick={() => window.open(this.props.Video)}
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"
            alt="youtube icon"
            className="githubicon projectDivComponents"
          />
        ) : null}
      </div>
        <button className="seeMoreButton" onClick={()=>this.seeToggle()}>See More</button>
        <br className="breaks"/>
        {this.state.seeMore ? <Fade><p>{this.props.description}</p></Fade> :null}
          <br className="breaks"/>

      </div>
    );
  }
}
ProjectDiv.propTypes = {};
export default ProjectDiv;
