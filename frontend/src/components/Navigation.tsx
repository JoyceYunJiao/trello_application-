import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
            <Link to="/workspaces" className="navigation__link">
                Workspaces
            </Link>
        </li>
        </ul>
    </nav>
    );
}

export default Navigation;