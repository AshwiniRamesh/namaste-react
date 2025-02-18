const { createContext } = require("react");

const UserContext = createContext({
loggedInUser:"FromContext"
})

export default UserContext;
