import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";


function RegisterPage(){

    const history = useHistory();
    
    function RegisterUserHandler(user){
        fetch("localhost:3306/user/save",{
            method : "POST",
            port : "3306",
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