import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">ホーム</a></li>
        <li><a href="#about">自己紹介</a></li>
        <li><a href="#experience">経験</a></li>
        <li><a href="#education">学歴</a></li>
        <li><a href="#skills">スキル</a></li>
        <li><a href="#projects">プロジェクト</a></li>
        <li><a href="#contact">連絡先</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;