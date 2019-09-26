import React from "react";
import BlogDiv from "./BlogDiv";
class Blogs extends React.Component {
  render() {
    return (
      <div className={`wholeForm ${this.props.dark}`}>
        <h1 className="Header">Blogs</h1>
        <div className="aboutDiv projectDiv">
          <BlogDiv
            Title="Reveal-ing the react animation library savior for css newbies"
            Link="https://medium.com/@tyler.soohoo/reveal-ing-the-react-animation-library-savior-for-css-newbies-4fe796b7c87f"
          />
          <br className="breaks" />
          <BlogDiv
            Title="Would I recommend a coding boot camp over a CS degree?"
            Link="https://medium.com/@tyler.soohoo/would-i-recommend-a-coding-boot-camp-over-a-cs-degree-9e228f17429d"
          />
          <br className="breaks" />
          <BlogDiv
            Title="Installing oracle vm virtualbox so you can run mac os on your windows computer"
            Link="https://medium.com/@tyler.soohoo/installing-oracle-vm-virtualbox-so-you-can-run-mac-os-on-your-windows-computer-3819d2d9f5c8"
          />
          <br className="breaks" />
          <BlogDiv
            Title="A project gone south"
            Link="https://medium.com/@tyler.soohoo/a-project-gone-south-e2109dd08be9"
          />
          <br className="breaks" />

        </div>
      </div>
    );
  }
}
Blogs.propTypes = {};
export default Blogs;
