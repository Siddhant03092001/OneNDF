import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const handleToggleClick = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  const handleNavItemClick = (path) => {
    navigate(path);
    setNavbarVisible(false); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary abc">
        <div className="container-fluid">
          <a className="navbar-brand abc" href="https://www.onendf.com/">
            OneNDF
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarVisible ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavItemClick('/')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => handleNavItemClick('/about')}
                >
                  About
                </a>
              </li>
            </ul>
            <a className="abc1" onClick={() => handleNavItemClick('/Registration')}>
              Sign up
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
