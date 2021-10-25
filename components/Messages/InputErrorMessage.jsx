import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

export const InputErrorMessage = (props) => {
  return (
    <Label color="error" {...props}>
       <Icon className="universe-exclamation" /> {props.content}
    </Label>
  );
};
