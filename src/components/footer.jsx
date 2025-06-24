import React from 'react';

/**
 * Footer component with simple layout
 * @returns {JSX.Element} - Footer component
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  );
};

export default Footer;