import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a style={{ textDecoration: 'none' }} href="#" className="logo">
        Rohit Negi
      </a>

      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About Us</a>
        <a href="#services">Courses</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="dashbtn">Dashboard</button>
      <button className="dashbtn">
        Login <i className="bx bx-terminal" id="termm"></i>
      </button>
    </header>
  );
};

export default Header;
