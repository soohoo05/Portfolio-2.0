import React from 'react';
import Sidebar from "react-sidebar";

class SideBar extends React.Component {
  render() {
    var theStyles = {
      sidebar: {
        background: "white",
        zIndex: 3
      },
      overlay:{
        zIndex: -1
      },
      content: {
        zIndex: -1
      },
      root:{
        zIndex: -1
      }
    };
    return (
      <Sidebar
        rootClassName="theSideBar"
      sidebar={
        <div className="sidebar">
          <button
            onClick={() => this.props.burgerHandler()}
            className="hamburger hamburger--vortex is-active"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          <br className="breaks" />
          <b>Menu</b>
          <br className="breaks" />
          <div className="scrollButtons">
            <button
              className="scrollButton"
              onClick={() => this.props.scrollHandler("about")}
            >
              About
            </button>
            <br className="breaks" />

            <button
              className="scrollButton"
              onClick={() => this.props.scrollHandler("projects")}
            >
              Projects
            </button>
            <br className="breaks" />

            <button
              className="scrollButton"
              onClick={() => this.props.scrollHandler("blogs")}
            >
              Blogs
            </button>
            <br className="breaks" />

            <button
              className="scrollButton"
              onClick={() => this.props.scrollHandler("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      }
      open={this.props.sidebarOpen}
      onSetOpen={this.onSetSidebarOpen}
      styles={theStyles}
    ></Sidebar>)
  }
}

export default SideBar;
