import { configure } from '@storybook/react';

import '../semantic.min.css';

function loadStories() {
  [
    'button',
    'button/group',
    'card',
    'checkbox',
    'radio',
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
    'navbar',
    'progress',
    'search',
    'segment',
    'step',
    'menu',
    'datepicker'
  ].forEach(function(comp){
    require("./" + comp);
  });
}

configure(loadStories, module);
