import User from "./User";
import UseClass from "./UserClass";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>Parent is functional and child is class components</h1>
      <div>
        <User type={"Functional component"} />
      </div>
      <div>
        <UseClass type={"Class component"} />
      </div>
    </div>
  );
};

class AboutParentClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount(){
          console.log("Parent is mounted")
  }
  render() {
console.log("Parent render");
    return (
      <div>
        <h1>Both parent and child are class components</h1>
        <UseClass calledTimes={"1"}/>
      </div>
    );
  }
}

module.exports = { AboutParentClassComponent, About };
