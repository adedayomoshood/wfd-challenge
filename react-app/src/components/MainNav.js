import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav__item">
        Login
      </Link>
      <Link to="/" className="main-nav__item highlighted">
        Sign Up
      </Link>
    </nav>
  );
};

export default MainNav;
