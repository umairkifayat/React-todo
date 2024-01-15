import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#2196F3',
    padding: '15px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <a href="todo" style={logoStyle}>
          Todo App
        </a>
      </div>

      <ul style={navLinksStyle}>
        <li>
          <a href="/" style={navLinkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="login" style={navLinkStyle}>
            Login
          </a>
        </li>
        <li>
          <a href="/logout" style={navLinkStyle}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
