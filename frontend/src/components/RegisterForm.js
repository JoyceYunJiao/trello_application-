import React, { useRef } from "react";

function RegisterForm(props){
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const answerRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        const fullName =fullNameRef.current.value;
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const answer = answerRef.current.value;
        const user = {fullName,email,password,answer}
        // console.log(user);
        props.registerUser(user);

    }

    return(
        <form onSubmit={submitRegisterForm}> 
            <input type="text" required placeholder="Full Name" ref={fullNameRef}/>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <input type="text" required placeholder="Name of first pet" ref={answerRef}/>
            <button>Submit</button>

        </form>

    );
}

export default RegisterForm;