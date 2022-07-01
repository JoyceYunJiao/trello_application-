import React, { useRef } from "react";

function LoginForm(props){
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitLoginForm(event){
        event.preventDefault();
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const user = {email,password}
        // console.log(user);
        props.loginUser(user);

    }

    return(
        <form onSubmit={submitLoginForm}> 
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <button>Submit</button>

        </form>

    );
}

export default LoginForm;