import * as Raven from 'raven-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Map from './components/Map';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Map />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
