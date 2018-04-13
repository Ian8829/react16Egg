import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MultipleElements from './multipleElements';
import TextOnly from './textOnly';
import Portal from './usePortal';
import Rd from './useDom';
import Avoid from './avoidTriggerUpdate';

ReactDOM.render(<Avoid />, document.getElementById('root'));
