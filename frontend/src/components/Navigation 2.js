import { Link} from "react-router-dom";

function Navigation(){
    return(
        <ul>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
            <li><Link to="/ForgotPassword">ForgorPassword</Link></li>

        </ul>
    );
}

export default Navigation;