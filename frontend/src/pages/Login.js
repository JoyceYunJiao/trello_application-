import {useHistory} from 'react-router-dom'
import LoginForm from "../components/LoginForm";
function LoginPage(){

    const history = useHistory();

    function loginUserHandler(user){
        fetch('http://localhost:9001/updateUserPasswordByEmail')
        .then(() => {
            // check email and password format
            history.replace("/home")})
    }
    return (
        <section>
            <h1>Login Page</h1>
            <LoginForm loginUser = {loginUserHandler}/>
        </section>
    );
}
export default LoginPage;