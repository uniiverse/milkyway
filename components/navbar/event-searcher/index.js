import React, { useState } from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react';
const debounce = require('lodash.debounce');

export const EventSearcher = () => {
  const [address, setAddress] = useState('');

  return (
    <Menu.Item>
      <Input
        onChange={(_, { value }) => onSearchChange({ value, setAddress })}
        placeholder='Search for events'
        value={address}
        icon={<Icon color="grey" className="universe-search" />}
        iconPosition="left"
      />
    </Menu.Item>
  );
}

// on change functions
const onSearchChange = ({ value, setAddress }) => {
  setAddress(value);
  debouncedRedirect(value);
};

// helper functions
const debouncedRedirect = debounce((loc) => {
  if (loc) window.location.href = `/explore?query=${loc.replace(/\s+/, '+')}`;
}, 1000);
