import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {

    const history = useHistory();

    function loginUserHandler(user){
    fetch("localhost:8080/login")
    .then(() => {
        history.push("/Home")
    }

    )

}


    return (
        <div>
        <h1>Login</h1>
        <LoginForm user = {loginUserHandler}></LoginForm>
        </div>
    );
}

export default Login;