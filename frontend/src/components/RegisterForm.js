import React, { useRef } from "react";

function RegisterForm(props){
    const fNameRef = useRef();
    const lNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const answerRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        const firstName =fNameRef.current.value;
        const lastName =lNameRef.current.value;
        const username =usernameRef.current.value;
        const email =emailRef.current.value;
        const password =passwordRef.current.value;
        const answer = answerRef.current.value;
        const user = {firstName,lastName,username,email,password,answer}
        // console.log(user);
        props.registerUser(user);

    }

    return(
        <form onSubmit={submitRegisterForm}> 
            <input type="text" required placeholder="First Name" ref={fNameRef}/>
            <input type="text" required placeholder="Last Name" ref={lNameRef}/>
            <input type="text" required placeholder="Username" ref={usernameRef}/>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <input type="text" required placeholder="Name of first pet" ref={answerRef}/>
            <button>Submit</button>

        </form>

    );
}

export default RegisterForm;