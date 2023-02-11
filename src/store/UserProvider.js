import { useReducer } from "react";
import UserContext from "./user-context";

const defaultUserState = {
    user: "",
    token: "",
};

const userReducer = async (lastState, action) => {

    if (action.type === "LOGIN") {
        const response = await fetch("http://localhost:3333/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: action.username, passwd: action.passwd}) 
        });
        const json = await response.json();
        console.log(json);
    }

    if (action.type === "LOGOUT") {
        return defaultUserState;
    }

}

const UserProvider = (props) => {

    const [userState, dispatchUserAction] = useReducer(userReducer, defaultUserState);

    const login = (username, passwd) => {
        dispatchUserAction({type: "LOGIN", username: username, passwd: passwd});
    }

    const logout = () => {
        dispatchUserAction({type: "LOGOUT"});
    }

    const userContext = {
        user: userState.user,
        token: userState.token,
        login: login,
        logout: logout,
    };

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;