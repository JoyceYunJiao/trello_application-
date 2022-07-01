import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";


function RegisterPage(){

    const history = useHistory();
    
    function RegisterUserHandler(user){
        fetch("http://localhost:9001/updateUserPasswordByEmail",{
            method : "POST",
            port : "9001",
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}

        }).then(()=>history.replace("/login"))
    }

    return(
        <div>
            <h1>Register Page</h1>
            <RegisterForm registerUser={RegisterUserHandler}/>
        </div>
    );
}
export default RegisterPage;