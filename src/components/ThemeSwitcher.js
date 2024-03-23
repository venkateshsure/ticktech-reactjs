import React, { Component } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from "react-icons/md";

class ThemeSwitcher extends Component {
  render() {
    const { theme, toggleTheme } = this.props;
    console.log(theme)
    return (
      <button className='theme-switcher' onClick={toggleTheme}>
        {theme === 'light' ? <MdDarkMode /> : <MdOutlineLightMode className='light-mode'/>}
      </button>
    );
  }
}

export default ThemeSwitcher;
