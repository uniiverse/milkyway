import React, { useState } from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react';
// const debounce = require('lodash.debounce');

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
console.log("REACT 1", window.React1);
console.log("REACT 1", window.React2);

 const EventSearcher = () => {
  const [address, setAddress] = useState('');
  // on change functions
  // const onSearchChange = ({ value, setAddress }) => {
    // setAddress(value);
    // debouncedRedirect(value);
  // };
  // // helper functions
  // const debouncedRedirect = debounce((loc) => {
  //   if (loc) window.location.href = `/explore?query=${loc.replace(/\s+/, '+')}`;
  // }, 1000);
  return (
    <Menu.Item>
      KEK
      {/* <Input
        onChange={(_, { value }) => onSearchChange({ value, setAddress })}
        placeholder='Search for events'
        value={address}
        icon={<Icon color="grey" className="universe-search" />}
        iconPosition="left"
      /> */}
    </Menu.Item>
  );
}
export { EventSearcher };



