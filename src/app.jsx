import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';

import { CV } from './components/cv/component.jsx';
import { PersonalInfo } from './components/personal-info/component.jsx';

ReactDOM.render(
  <div>
    <CV/>
    <PersonalInfo/>
  </div>,
  document.getElementById('app')
);
