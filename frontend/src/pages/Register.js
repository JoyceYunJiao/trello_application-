import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";


function RegisterPage(){

    const history = useHistory();
    
    function RegisterUserHandler(user){
        fetch("localhost:8080/user/save",{
            method : "POST",
            port : "8080",
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}

        }).then(()=>history.replace('/Login'))
    }

    return(
        <div>
            <h1>Register Page</h1>
            <RegisterForm registerUser={RegisterUserHandler}/>
        </div>
    );
}
export default RegisterPage;