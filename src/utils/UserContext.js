import { createContext } from "react";

const UserContext = createContext({
    LogedInUser: "Default name"
});

export default UserContext;