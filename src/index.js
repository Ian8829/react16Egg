import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MultipleElements from './multipleElements';
import TextOnly from './textOnly';
import Portal from './usePortal';
import Rd from './useDom';
import Avoid from './avoidTriggerUpdate';
import Fragment from './fragment';
import Bar from './bar';
import GetDriveredStateFromProps from './getDriveredStateFromProps';

ReactDOM.render(<GetDriveredStateFromProps />, document.getElementById('root'));
