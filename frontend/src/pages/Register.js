import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";


function RegisterPage(){

    const history = useHistory();
    
    function RegisterUserHandler(user){
        fetch("http://localhost:8080/user/save",{
            method : "POST",
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