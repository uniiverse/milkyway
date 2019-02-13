import React from 'react';

import { configure, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../semantic.min.css';

function loadStories() {
  ['button', 'card', 'checkbox', 'dropdown', 'form', 'grid', 'header', 'input', 'progress', 'step'].forEach(function(comp){
    require("./" + comp);
  });
}

configure(loadStories, module);
