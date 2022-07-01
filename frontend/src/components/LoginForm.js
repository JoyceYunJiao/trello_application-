import React, { useRef } from "react";

function LoginForm(props){
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const user = {email,password}
        // console.log(user);
        props.loginUser(user);

    }

    return(
        <form onSubmit={submitRegisterForm}> 
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <button>Submit</button>

        </form>

    );
}

export default LoginForm;