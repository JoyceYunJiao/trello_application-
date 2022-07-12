import { useRef } from "react";
import { Container } from "react-bootstrap";

function RegisterForm(props){
    const fNameRef = useRef();
    const lNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const answerRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        
        const form = event.currentTarget;
        console.log(form);
        const passwordInput = form.children[4].value;

        if(passwordInput.length < 8){
            alert("Password must be at least 8 characters long");
            return;
        }

        if (passwordInput.search(/[a-z]/i) < 0) {
            alert("Password must contain at least one lowercase letter");
            return;
        }

        if (passwordInput.search(/[A-Z]/i) < 0) {
            alert("Password must contain at least one uppercase letter");
            return;
        }

        if (passwordInput.search(/[0-9]/i) < 0) {
            alert("Password must contain at least one number");
            return;
        }

        if (passwordInput.search(/[^a-zA-Z0-9]/i) < 0) {
            alert("Password must contain at least one special character");
            return;
        }

        if (form.checkValidity() === false) {
            alert("Please fill out all fields and ensure password is at least 8 characters long and contains at least one upper case letter, one lower case letter, one number, and one special character");
            return;
        }
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
        <Container>
            <p>Register your account here. Please ensure all fields are filled, your password is at least 8 characters long and contains at least 1 uppercase, 1 lowercase, 1 number and 1 special character.</p>

        <form onSubmit={submitRegisterForm}> 
            <input type="text" required placeholder="First Name" ref={fNameRef}/>
            <input type="text" required placeholder="Last Name" ref={lNameRef}/>
            <input type="text" required placeholder="Username" ref={usernameRef}/>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef} min={8}/>
            <input type="text" required placeholder="Name of first pet" ref={answerRef}/>
            <button>Submit</button>

        </form>

        </Container>

    );
}

export default RegisterForm;