import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider} from 'react-redux';
import App from './App.jsx';
import './index.css';
import { store } from './store/store.js';
import Task from './Task.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Task/>
    </Provider>
  </StrictMode>
)
