import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import "./sass/app.scss"; 
import App from './App.jsx';

const root = document.getElementById('root');
root.classList.add('website');

createRoot(root).render(
    <StrictMode>
        <HashRouter basename="/kuzov73">
            <App />
        </HashRouter>
    </StrictMode>,
)
