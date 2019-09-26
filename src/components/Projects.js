import React from "react";
import ProjectDiv from "./ProjectDiv";
class Projects extends React.Component {
  render() {
    return (
      <div className="wholeForm">
        <h1 className="Header">Projects</h1>
        <div className="aboutDiv projectDiv">
          <ProjectDiv
            Name="Access Labs Leaderboard"
            Website="https://access-labs-leaderboard.firebaseapp.com/"
            Link="https://github.com/soohoo05/AccessLabs_leaderboard_frontend"
            Video="https://www.youtube.com/watch?v=ocMlKqwPwQQ&feature=youtu.be"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Gotta Hack 'Em All"
            Website=""
            Link="https://github.com/soohoo05/GottaHackEmAll-Back"
            Video="https://www.youtube.com/watch?v=ftPjvGyzJZc&feature=youtu.be"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="React Jobs"
            Website=""
            Link="https://github.com/soohoo05/ReactJobs"
            Video="https://youtu.be/oVOgIeBE2-g"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Computer Parts API + Submission Board "
            Website=""
            Link="https://github.com/soohoo05/Computer-Parts-API-submission-board"
            Video=""
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Git-A-Job"
            Website=""
            Link="https://github.com/soohoo05/Git-a-Job-Backend"
            Video=""
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Movie Guide"
            Website=""
            Link="https://github.com/ScottWaring/module-one-final-project-guidelines-dumbo-web-091718"
            Video=""
          />
        </div>
      </div>
    );
  }
}

export default Projects;
