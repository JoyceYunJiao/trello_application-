import React, { useRef } from "react";

function RegisterForm(props){
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        const fullName =fullNameRef.current.value;
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const user = {fullName,email,password}
        // console.log(user);
        props.registerUser(user);

    }

    return(
        <form onSubmit={submitRegisterForm}> 
            <input type="text" required placeholder="Full Name" ref={fullNameRef}/>
            <input type="email" required placeholder="email" ref={emailRef}/>
            <input type="password" required placeholder="password" ref={passwordRef}/>
            <button>Submit</button>

        </form>

    );
}

export default RegisterForm;