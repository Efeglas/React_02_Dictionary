import React from "react";

const UserContext = React.createContext({
    user: "",
    token: "",
    login: (username, passwd) => {},
    logout: () => {},
});

export default UserContext;