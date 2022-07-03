import {useHistory} from 'react-router-dom'
import LoginForm from "../components/LoginForm";
function LoginPage(){

    const history = useHistory();

    function loginUserHandler(user){
        // link to login inside fetch
        fetch("")
        .then(() => {
            // check email and password format
            history.replace("/Home")})
    }
    return (
        <section>
            <h1>Login Page</h1>
            <LoginForm loginUser = {loginUserHandler}/>
        </section>
    );
}
export default LoginPage;