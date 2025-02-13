import "../styles/User.css";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      user:{
        }
    };
        console.log("Child constructor"+this.props.calledTimes);
  }
 async  componentDidMount() {
    console.log("Child is mounted"+this.props.calledTimes);
    const data = await fetch("https://api.github.com/users/ashwinihr303");
    const json = await data.json();
//     console.log(json)
    this.setState({user:json})
  }
componentWillUnmount(){
console.log("Component will un mount")
}
  render() {
    console.log("Child render" + this.props.calledTimes);
    return (
      <div>
        <h1>{this.props.type}</h1>
        <div className="user-card">
          <img
            className="user-photo"
            alt={`${this.state.user.login}'s photo`}
            src={this.state.user.avatar_url}
          />
          <div className="user-details">
            <h2 className="user-name">{this.state.user.login}</h2>
            <p className="user-location">
              <strong>Follwers:</strong> {this.state.user.followers}
            </p>
            <div className="user-contact">
              <p>
                <strong>Type:</strong> {this.state.user.type}
              </p>
            </div>
            <div className="user-links">
              <a
                href={this.state.user.repos_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo's URL
              </a>
              <a href={this.state.user.url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div>
          <span>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                  count2: this.state.count2 + 1,
                });
              }}
              style={{ color: "blue", padding: "5px" }}
            >
              Count
            </button>
            <span style={{ paddingLeft: "5px" }}>
              {this.state.count} {this.state.count2}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
export default UserClass;
