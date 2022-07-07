import React, {useRef} from "react";

function LoginForm(props) {

    const emailRef = useRef();
    const passwordRef = useRef();

    function submitLoginForm(event){

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {email, password}
        //console.log(user);
        props.login(user);
    }
    return (
        <form onSubmit = {submitLoginForm}>
            <input type = "email" required placeholder = "email" ref = "emailRef"></input>
            <input type = "password" required placeholder = "password" ref = "passwordRef"></input>
            <button>Submit</button>
            <input type = "button" value = "Forget password" onclick = "window.location.href = './pages/forgotPassword'"></input>
        </form>
        
    );
}

export default Login;