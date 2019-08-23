import React from 'react';

import { configure } from '@storybook/react';

import '../semantic.min.css';

function loadStories() {
  [
    'button',
    'button/group',
    'card',
    'checkbox',
    'dropdown',
    'form',
    'grid',
    'header',
    'icon',
    'image',
    'input',
    'loader',
    'message',
    'modal',
    'progress',
    'search',
    'segment',
    'step'
  ].forEach(function(comp){
    require("./" + comp);
  });
}

configure(loadStories, module);
