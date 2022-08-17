import React, { useState, useRef } from 'react';
import { Popup, Icon } from 'semantic-ui-react';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { classNames } from '../../utilities/css';
import { StyledDatePickerController } from '../StyledDatePickerController';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import styles from './DatePicker.less';

export const DatePicker = ({ date, highlightedDates, onDateChange, popupPosition='bottom left'}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarEl = useRef();
    
  useOutsideClick(calendarEl, () => calendarOpen && setCalendarOpen(false));

  function onDateSelect(newDate) {
    setSelectedDate(newDate);
    onDateChange(newDate);
    setCalendarOpen(false);
  }

  return(
    <div className="date-picker-container">
      
      <Popup
      className={styles.pickerPopup}
        trigger={
          <div
            role="button"
            tabIndex={0}
            className={styles.dropdownTrigger}
            onClick={() => setCalendarOpen(!calendarOpen)}
          >
            <Icon className={classNames('universe-date', styles.calendarIcon)} />
            {
              selectedDate &&
                <span className={styles.selection}>{selectedDate.format("MMM D, YYYY")}</span>
            }
            <Icon
              className={classNames(
                styles.chevron,
                calendarOpen ? 'universe-chevron-up' : 'universe-chevron-down',
              )}
            />
          </div>
        }
        floating
        labeled
        open={calendarOpen}
        position={popupPosition}
        on='click'
      >
        <Popup.Content>
          <div ref={calendarEl}>
            <StyledDatePickerController
              className={styles.DatePicker}
              onDateChange={onDateSelect}
              highlightedDates={highlightedDates}
              date={selectedDate}
            />
          </div>
        </Popup.Content>
      </Popup>
    </div>
  )
};
