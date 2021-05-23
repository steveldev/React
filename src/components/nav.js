import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-main">
        <ul>
            <NavLink to="/" exact className="" activeClassName="active"><li>Accueil</li> </NavLink>
            <NavLink to="/about" exact className="" activeClassName="active"><li>A propos</li></NavLink>
            <NavLink to="/contact" exact className="" activeClassName="active"><li>Contact</li></NavLink>
        </ul>
    </nav>
  );
}

export default Nav;
