import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';
import ParticlesSt from './components/ParticlesSt'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {document.body.offsetWidth >= 600 &&
                <ParticlesSt />
            }
             <App />
        </Provider>
    </React.StrictMode>
);

