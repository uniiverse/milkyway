import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Container } from 'semantic-ui-react';
import moment from 'moment';

import { StyledDatePickerController } from '../../components/StyledDatePickerController';
import { DatePicker } from '../../components/DatePicker';

const highlightedDates = [
  moment().format('YYYY-MM-DD'),
  moment().add(1, 'days').format('YYYY-MM-DD'),
  moment().add(2, 'days').format('YYYY-MM-DD'),
  moment().subtract(1, 'days').format('YYYY-MM-DD'),
  moment().subtract(2, 'days').format('YYYY-MM-DD')
]

const stories = storiesOf('DatePicker', module)
  .add('StyledDatePickerController with no default date', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController 
        onDateChange={action('onDateChange')}
      />
    </Container>
  )
  .add('StyledDatePickerController with navigation disabled', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController 
        onDateChange={action('onDateChange')}
        date={moment()}
        disablePrev
        disableNext
      />
    </Container>
  )
  .add('StyledDatePickerController', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController 
        onDateChange={action('onDateChange')}
        date={moment()}
      />
    </Container>
  )
  .add('StyledDatePickerController with non-moment object', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController 
        onDateChange={action('onDateChange')}
        date={new Date()}
      />
    </Container>
  )
  .add('StyledDatePickerController with JS Date object', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController 
        onDateChange={action('onDateChange')}
        date={new Date(2018, 11, 24, 10, 33, 30, 0)}
      />
    </Container>
  )
  .add('with a particular date selected', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController
        onDateChange={action('onDateChange')}
        date={moment('2021-05-10')}
      />
    </Container>
  )
  .add('with highlighted dates', () =>
    <Container>
      <br/>
      <br/>
      <StyledDatePickerController
        onDateChange={action('onDateChange')}
        highlightedDates={highlightedDates}
        date={moment()}
      />
    </Container>
  )
  .add('within dropdown', () =>
    <Container>
      <br/>
      <br/>
      <DatePicker 
        onDateChange={action('onDateChange')}
        highlightedDates={highlightedDates}
        date={moment()}
      />
    </Container>
  );

export default stories;
