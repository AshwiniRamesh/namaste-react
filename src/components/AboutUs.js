import User from "./User";
import UseClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

const About = () => {
  return (
    <div>
      <h1>Parent is functional and child is class components</h1>

      <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser}</h1>}
        </UserContext.Consumer>
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
  }

  componentDidMount() {
    // console.log("Parent is mounted");
  }

  render() {
    return (
      <div>
        <h1>Both parent and child are class components</h1>
        <UseClass calledTimes={"1"} />
      </div>
    );
  }
}

export { AboutParentClassComponent, About };
