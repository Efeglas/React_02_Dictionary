import { Fragment, useContext } from "react";
import UserContext from "./store/user-context";
import Login from "./Login/Login";

const App = () => {

  const ctx = useContext(UserContext);

  const onClickFetchHandler = () => {
    ctx.login("", "");
  };

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;