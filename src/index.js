import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MultipleElements from './multipleElmWithoutWrappingElm/multipleElements';
import TextOnly from './renderTextOnlyComp/textOnly';
import Portal from './portal/usePortal';
import Rd from './defineDOM/useDom';
import Avoid from './setStateWithNullWithAvoidUpdate/avoidTriggerUpdate';
import Fragment from './multipleElmWithoutWrappingElm/fragment';
import Bar from './createRef/bar';
import GetDriveredStateFromProps from './getDerivedStateFromProps/getDriveredStateFromProps';
import ForwardDOM from './forwardDOM/App';

ReactDOM.render(<ForwardDOM />, document.getElementById('root'));
