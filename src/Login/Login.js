import { useContext, useState } from 'react';
import UserContext from '../store/user-context';
import style from './Login.module.css';
import BookIcon from '../UI/Icons/Book';

const defaultInputState = {username: "", password: ""};
const defaultValidState = {usernameTouched: false, passwordTouched: false};

const Login = () => {

    const userContext = useContext(UserContext);

    const [userInputs, setUserInputs] = useState(defaultInputState);
    const [userInputsValid, setUserInputsValid] = useState(defaultValidState);

    const userInputsUsernameIsValid = userInputs.username.trim() !== "";
    const userInputsPasswordIsValid = userInputs.password.trim() !== "" || userInputs.password.trim().lenght > 7;

    const inputUsernameIsValid = !userInputsUsernameIsValid && userInputsValid.usernameTouched; 
    const inputPasswdIsValid = !userInputsPasswordIsValid && userInputsValid.passwordTouched;

    const usernameInputHandler = (event) => {
        setUserInputs((prevState) => {
            return {...prevState, username: event.target.value};
        });
    }

    const usernameBlurHandler = (event) => {
        setUserInputsValid((prevState) => {
            return {...prevState, usernameTouched: true};
        });
    }

    const passwdBlurHandler = (event) => {
        setUserInputsValid((prevState) => {
            return {...prevState, passwordTouched: true};
        });
    }

    const passwdInputHandler = (event) => {
        setUserInputs((prevState) => {
            return {...prevState, password: event.target.value};
        });
    }

    const submitHandlerLogin = (event) => {
        event.preventDefault();
        
        setUserInputsValid((prevState) => {
          return { ...prevState, usernameTouched: true };
        });
        
        setUserInputsValid((prevState) => {
          return { ...prevState, passwordTouched: true };
        });

        if (!userInputsUsernameIsValid || !userInputsPasswordIsValid) {
            return;
        }
        
        console.log("SUBMIT");
        setUserInputs(defaultInputState);
        setUserInputsValid(defaultValidState);
    }

    const inputUsernameClass = inputUsernameIsValid ? style.invalid : "";
    const inputPasswdClass = inputPasswdIsValid ? style.invalid : "";

    return (
        <div className={style.center}>
            <form className={style.login} onSubmit={submitHandlerLogin}>
                <BookIcon />
                <h3>Log in</h3>
                <div className={`${style["input-group"]} ${inputUsernameClass}`}>
                    <label>Username</label>
                    <input type='text' placeholder='Username...' onInput={usernameInputHandler} onBlur={usernameBlurHandler} value={userInputs.username}/>
                </div>
                <div className={`${style["input-group"]} ${style.mt} ${inputPasswdClass}`}>
                    <label>Password</label>
                    <input type='password' placeholder='Password...' onInput={passwdInputHandler} onBlur={passwdBlurHandler} value={userInputs.password}/>
                </div>
                <div className={`${style["button-group"]} ${style.mt}`}>
                    <button type='submit' className={style["btn-login"]}>Log in</button>
                </div>
                <p><a href='https://www.youtube.com/'>Forget password?</a></p>
                <p>Don't have an account? <a href='https://www.youtube.com/'>Register</a></p>
            </form>
        </div>
    );
}

export default Login;