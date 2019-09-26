import React from 'react';

class ProjectDiv extends React.Component {
  render() {
    return(
      <div className="indProject">
              {this.props.Website.length!==0 ? <h1 onClick={()=>window.open(this.props.Website)} className="Website projectHeader projectDivComponents">{this.props.Name}</h1> : <h1 className="projectHeader projectDivComponents">{this.props.Name}</h1>}
            <img onClick={()=>window.open(this.props.Link)}src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github icon" className="githubicon projectDivComponents"/>
            {this.props.Video.length!==0 ? <img onClick={()=>window.open(this.props.Video)}src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="youtube icon" className="githubicon projectDivComponents"/> :null}
            </div>
    )
  }
}
ProjectDiv.propTypes = {

};
export default ProjectDiv;
