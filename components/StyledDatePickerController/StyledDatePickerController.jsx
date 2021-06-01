import React, { useState } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import { Icon } from 'semantic-ui-react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles.less';

export const StyledDatePickerController = 
  ({ highlightedDates, onDateChange, disablePrev, disableNext, date, ...passthroughProps }) => {

    function onDateSelect(newDate) {
      if(onDateChange){
        onDateChange(newDate);
      }
    }

    function isDayHighlighted(day) {
      return highlightedDates.some(highlightedDate => day.isSame(highlightedDate, 'day'));
    }

    function isDayBlocked(day) {
      return highlightedDates && !highlightedDates.includes(day.format('YYYY-MM-DD'));
    }

    return (
      <>
        <DayPickerSingleDateController
          {...passthroughProps}
          noBorder
          hideKeyboardShortcutsPanel
          numberOfMonths={1}
          date={date}
          onDateChange={onDateSelect}
          isDayHighlighted={highlightedDates && isDayHighlighted}
          isDayBlocked={highlightedDates && isDayBlocked}
          navPrev={disablePrev ? <span /> : <Icon className="universe-chevron-left" />}
          navNext={disableNext ? <span /> : <Icon className="universe-chevron-right" />}
        />
      </>
    );
  };
