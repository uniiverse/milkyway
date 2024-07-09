import React, { useState } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles.less';

export const StyledDatePickerController = 
  ({ highlightedDates, onDateChange, disablePrev, disableNext, date, ...passthroughProps }) => {
    const [selectedDate, setSelectedDate] = useState(date ? moment(date) : null);

    function onDateSelect(newDate) {
      setSelectedDate(newDate);
      if(onDateChange){
        onDateChange(newDate);
      }
    }

    function isDayHighlighted(day) {
      return highlightedDates && highlightedDates.some(highlightedDate => day.isSame(highlightedDate, 'day'));
    }

    function isDayBlocked(day) {
      return highlightedDates && !highlightedDates.includes(day.format('YYYY-MM-DD'));
    }

    return (
      <div className="singleDatePickerWrapper">
        <DayPickerSingleDateController
          {...passthroughProps}
          noBorder
          hideKeyboardShortcutsPanel
          numberOfMonths={1}
          date={selectedDate}
          onDateChange={onDateSelect}
          focused={true}
          isDayHighlighted={isDayHighlighted}
          isDayBlocked={isDayBlocked}
          navPrev={disablePrev ? <span /> : null}
          navNext={disableNext ? <span /> : null}
          onNextMonthClick={onNextMonthClick}
          onPrevMonthClick={onPrevMonthClick}
        />
      </div>
    );
  };
