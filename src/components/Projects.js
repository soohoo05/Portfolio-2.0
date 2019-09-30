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
            description="Community app that displays the top 10 Alumni with the most company communications. Currently serves 50 people and growing. Created with React JS and Ruby on Rails"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Gotta Hack 'Em All"
            Website=""
            Link="https://github.com/soohoo05/GottaHackEmAll-Back"
            Video="https://www.youtube.com/watch?v=ftPjvGyzJZc&feature=youtu.be"
            description="Website to host hackathons for users to search and save events. Created using React JS and Ruby on Rails"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="React Jobs"
            Website=""
            Link="https://github.com/soohoo05/ReactJobs"
            Video="https://youtu.be/oVOgIeBE2-g"
            description="An application to practice using the fundamentals of React and Javascript. Users will get a list of jobs from an API, render them using a container and reusable components.
            Users will create a button that upon being clicked, will show details of a job. Users will create a button that upon being clicked, will let the user edit the job and changes will persist to a database"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Computer Parts API + Submission Board "
            Website=""
            Link="https://github.com/soohoo05/Computer-Parts-API-submission-board"
            Video=""
            description="API that hosts a list of computer parts like CPU's, Motherboards, VideoCards, etc.  and a website to submit new parts. Created using React JS and Node JS."
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Git-A-Job"
            Website=""
            Link="https://github.com/soohoo05/Git-a-Job-Backend"
            Video=""
            description="An application that uses the Github Jobs API to display a list of jobs based off a search. Users can save jobs to their profile as well as email them to themselves. Created using Javascript and Ruby on Rails"
          />
          <br className="breaks" />
          <ProjectDiv
            Name="Movie Guide"
            Website=""
            Link="https://github.com/ScottWaring/module-one-final-project-guidelines-dumbo-web-091718"
            Video=""
            description="A CLI application that uses the Guidebox API to search for movies, save them to their personal lists, edit their lists, edit the movies on their list, and view links to stream from free, subscription, and purchase source for later emailing. Created using Ruby"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
