import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";


function RegisterPage(){

    const navigate = useNavigate();
    
    function RegisterUserHandler(user){
        fetch("http://localhost:8080/user/save",{
            method : "POST",
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}

        }).then(()=>navigate('/Login',{replace:true}))
    }

    return(
        <div>
            <h1>Register Page</h1>
            <RegisterForm registerUser={RegisterUserHandler}/>
        </div>
    );
}
export default RegisterPage;