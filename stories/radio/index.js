import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Container, Radio, Form } from 'semantic-ui-react';


const stories = storiesOf('Radio', module)
  .add('Default', () =>
    <Container fluid>
      <p><Radio label="Unchecked" /></p>
      <p><Radio label="Checked" checked /></p>
      <p><Radio label="Disabled" disabled /></p>
    </Container>
  )
  .add('Controlled Radio Group', () => {
    const [radioSelection, setRadioSelection] = useState(1);
    const handleChange = (e, { value }) => setRadioSelection(value)
    return (
      <Container fluid >
        <div>
          <Radio
            name='radioGroup'
            value={1}
            checked={radioSelection == 1}
            onChange={handleChange}
            label="Radio 1" />
        </div>
        <div>
          <Radio
            name='radioGroup'
            value={2}
            checked={radioSelection == 2}
            onChange={handleChange}
            label="Radio 2" />
        </div>
        <div>
          <Radio
            name='radioGroup'
            value={3}
            checked={radioSelection == 3}
            onChange={handleChange}
            label="Radio 3" />
        </div>
      </Container>
    )
  }

  )
  .add('Toggle', () =>
    <Container fluid>
      <p><Radio toggle label="Toggle" /></p>
      <p><Radio toggle checked={false} disabled label="Unchecked disabled" /></p>
      <p><Radio toggle checked={true} disabled label="Checked disabled" /></p>
    </Container>
  );

export default stories;
