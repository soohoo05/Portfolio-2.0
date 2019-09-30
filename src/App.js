import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./CSS/App.css";
import "./CSS/Hamburger.css";
import {
  Blogs,
  Contact,
  Projects,
  About,
  SideBar
} from "./components/index.js";
import scrollToComponent from "react-scroll-to-component";
import ScrollUpButton from "react-scroll-up-button";
class App extends React.Component {
  state = {
    sidebarOpen: false
  };
  scrollHandler = theComponent => {
    switch (theComponent) {
      case "about":
        scrollToComponent(this.about, { duration: 1500, offset: -200 });
        this.burgerHandler();
        break;
      case "projects":
        scrollToComponent(this.projects, { duration: 1500, offset: -200 });
        this.burgerHandler();
        break;
      case "blogs":
        scrollToComponent(this.blogs, { duration: 1500, offset: -200 });
        this.burgerHandler();
        break;
      case "contact":
        scrollToComponent(this.contact, { duration: 1500, offset: -200 });
        this.burgerHandler();
        break;
      default:
        console.log("error");
    }
  };
  burgerHandler = () => {
    var menu = document.getElementById("menu");
    var body = document.querySelector("body");
    var root = document.querySelector(".theSideBar");
    if (this.state.sidebarOpen) {
      root.style.zIndex = -1;
      menu.style.visibility = "visible";
      body.style.overflow = "scroll";
      this.setState({ sidebarOpen: false });
    } else {
      root.style.zIndex = 1;
      body.style.overflow = "hidden";
      menu.style.visibility = "hidden";
      this.setState({ sidebarOpen: true });
    }
  };
  navSelector = () => {
    if (window.screen.width > 768) {
      return (
        <div className="NavBar">
          <button
            id="menu"
            onClick={() => this.burgerHandler()}
            className="hamburger hamburger--vortex"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <Zoom>
          <div className="nameDiv">
            <h1 className="Name">Tyler Soo Hoo</h1>
          </div>
        </Zoom>
        </div>
      );
    } else {
      return (
        <div className="NavBar">
          <div className="nameDiv">
            <Zoom>

            <h1 className="Name">Tyler Soo Hoo</h1>
          </Zoom>
          </div>

          <button
            id="menu"
            onClick={() => this.burgerHandler()}
            className="hamburger hamburger--vortex"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="App">
        <SideBar
          burgerHandler={this.burgerHandler}
          scrollHandler={this.scrollHandler}
          sidebarOpen={this.state.sidebarOpen}
        />
        {this.navSelector()}
        <ScrollUpButton />
        <Fade>
        <About
          dark="dark"
          ref={section => {
            this.about = section;
          }}
        />
      </Fade>

        <Fade>

        <Projects
          dark="light"
          ref={section => {
            this.projects = section;
          }}
        />
      </Fade>

        <Fade>

        <Blogs
          dark="dark"
          ref={section => {
            this.blogs = section;
          }}
        />
      </Fade>

        <Fade>

        <Contact
          dark="light"
          ref={section => {
            this.contact = section;
          }}
        />
    </Fade>
      </div>
    );
  }
}

export default App;
