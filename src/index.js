import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { webVitals } from './vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const analyticsId = import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID;

webVitals({
  path: window.location.pathname,
  analyticsId,
})
