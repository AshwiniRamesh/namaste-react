import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      user: {},
    };
    console.log("Child constructor" + this.props.calledTimes);
  }

  async componentDidMount() {
    console.log("Child is mounted" + this.props.calledTimes);
    const data = await fetch("https://api.github.com/users/ashwinihr303");
    const json = await data.json();
    this.setState({ user: json });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("Child render" + this.props.calledTimes);
    return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-4">{this.props.type}</h1>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          {this.state.user.avatar_url && (
            <img
              className="w-24 h-24 rounded-full mb-4 border-2 border-gray-300"
              alt={`${this.state.user.login}'s photo`}
              src={this.state.user.avatar_url}
            />
          )}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              {this.state.user.login}
            </h2>
            <p className="text-gray-500">
              <strong>Followers:</strong> {this.state.user.followers}
            </p>
            <p className="text-gray-500">
              <strong>Type:</strong> {this.state.user.type}
            </p>
          </div>
          <div className="mt-4 flex space-x-4">
            <a
              href={this.state.user.repos_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Repos
            </a>
            <a
              href={this.state.user.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
              });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Count
          </button>
          <span className="ml-4 text-lg font-medium">
            {this.state.count} {this.state.count2}
          </span>
        </div>
      </div>
    );
  }
}

export default UserClass;
