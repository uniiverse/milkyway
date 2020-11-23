import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import { Menu } from 'semantic-ui-react';



const stories = storiesOf('Menu', module)
  .add('Default', () => {
    const [tab, setTab] = useState("orders");
    return (
      <Menu pointing secondary>
        <Menu.Item
          name="Menu item 1"
          active={tab === 1}
          onClick={() => setTab(() => 1)}
        />
        <Menu.Item
          name="Menu Item 2"
          active={tab === 2}
          onClick={() => setTab(() => 2)}
        />
        <Menu.Item
          name="Menu Item 3"
          active={tab === 3}
          onClick={() => setTab(() => 3)}
        />
      </Menu>
    )
    }
  )
  .add('Orders & Attendees', () => {
    const [tab, setTab] = useState("orders");
     return (
      <Menu pointing secondary>
        <Menu.Item
          name="Orders"
          color="blueDark"
          active={tab === 'orders'}
          onClick={() => setTab(() => 'orders')}
        />
        <Menu.Item
          name="Attendees"
          color="blueDark"
          active={tab === 'attendees'}
          onClick={() => setTab(() => 'attendees')}
        />
      </Menu>
      )
    }
  );


export default stories;
