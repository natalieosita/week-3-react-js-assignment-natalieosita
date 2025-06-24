import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <Button
      onClick={toggle}
      variant="secondary"
      size="sm"
      className="ml-2"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </Button>
  );
};

export default ThemeToggle;