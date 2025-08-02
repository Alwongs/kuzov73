import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./sass/app.scss"; 
import App from './App.jsx';

const root = document.getElementById('root');
root.classList.add('website');

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
