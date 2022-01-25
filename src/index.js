import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import { AuthContextProvider } from './components/Context/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReduxProvider>
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
