import React from "react";
import Fade from 'react-reveal/Fade';
class About extends React.Component {
  render() {
    return (
      <div className={`wholeForm ${this.props.dark}`}>
        <div className="profile">
          <Fade>
          <img
            className="proPic"
            src="https://res.cloudinary.com/dz1dbcszc/image/upload/r_30/a_360/v1547583518/img_0552_1.jpg"
            alt="profile"
          />
      </Fade>
        </div>
        <Fade>
        <div className="Links">
          <div>
            <img
              className="logos"
              onClick={() => window.open("https://medium.com/@tyler.soohoo")}
              width="40px"
              height="40px"
              src="https://cdn-images-1.medium.com/max/1600/1*emiGsBgJu2KHWyjluhKXQw.png"
              alt="medium"
            />
            <img
              className="logos"
              onClick={() => window.open("https://github.com/soohoo05")}
              width="40px"
              height="40px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-wV4WOebhfVtNRUsA05npiKPlEITU29ha8uX-HtSyKej4xVfF"
              alt="medium"
            />
            <img
              className="logos"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tyler-soo-hoo-937328125/"
                )
              }
              width="40px"
              height="40px"
              alt="linkedin"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            />
          </div>
          <img
            className="logos"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1i5xcsRr4KBbDrOTMSkElQw1MNLN1b_xbVK0TnSQE4no/edit#"
              )
            }
            width="150px"
            height="150px"
            alt="resume"
            src="https://ancorp.com/wp-content/uploads/2019/05/resume-icon-16.png"
          />
        </div>
      </Fade>
      <Fade>

        <h1
          className="Header"
          ref={section => {
            this.about = section;
          }}
        >
          About Me
        </h1>
        <div className="aboutDiv">
          <p className="aboutParagraph">
            My name is Tyler Soo Hoo. I'm a Full Stack Web Developer with a
            background in marketing and IT and an interest in music and health.
            I graduated Queens College with a Bachelors of Arts degree in
            Computer Science. After a year in IT and Marketing at a hotel, I
            decided to come back to the Software Engineering industry by going
            to Flatiron School to learn new skills. My proficiencies include
            Ruby, Ruby on Rails, Javascript, React and Redux. I have knowledge
            in HTML, CSS, SQL, Node.js and Java. I currently work for Trilogy
            Education where I am an Online teaching assistant. I work with
            students and assist them in learning to program.
          </p>
        </div>
      </Fade>
        
      </div>
    );
  }
}

export default About;
