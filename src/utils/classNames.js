/**
 * Conditionally join class names together.
 * @param  {...(string|boolean|undefined)} classes - Tailwind or custom classes
 * @returns {string}
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}