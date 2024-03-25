import React from 'react';
import { createRoot } from 'react-dom/client';
import { deviceReady } from './deviceReady';
import { Provider } from 'react-redux';
import { store } from './stores/store';

import MainApp from './MainApp'


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
   <Provider store={store}>
        <MainApp />
      </Provider>
  </React.StrictMode>
);

// document.addEventListener(
//   "deviceready",
//   () => {
//     deviceReady()
//   },
//   false,
// )