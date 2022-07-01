import { Link} from "react-router-dom";

function Navigation(){
    return(
        <nav>
            <ul>
            <li><Link to="/Home">Home Page</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/ForgotPassword">Forgot Password</Link></li>

            </ul>
        </nav>
    );
}

export default Navigation;