import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component to display content inside a styled container.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Inner content
 * @param {string} props.className - Additional Tailwind classes
 * @returns {JSX.Element} - Card component
 */
const Card = ({ children, className = '', ...rest }) => {
  const baseClasses = 'bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-colors';
  return (
    <div className={`${baseClasses} ${className}`} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;