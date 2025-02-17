const { createContext } = require("react");

const UserContext = createContext({
          loggedInUser:"Default user"
})

export default UserContext;
