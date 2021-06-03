import { useEffect } from 'react';
// This hook adds a click event listener to document
// Each click gets checked wether it happens outside of ref element, if so the callback action is executed
// The click event listener is removed from the document after the click is detected outside the element.
// Instructions for use:
// Pass the reference to an html element/React component as first argument
// And the method that you would like to execute when a click is detected outside of the referenced element
export const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
