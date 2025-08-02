import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TopPanel from './components/topPanel';

const Home     = lazy(() => import('./pages/Home'));
const About    = lazy(() => import('./pages/About'));
const Gallery  = lazy(() => import('./pages/Gallery'));
const Services = lazy(() => import('./pages/Services'));
const Feedbacks = lazy(() => import('./pages/Feedbacks'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
    return (
        <>
            <TopPanel />

            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/feedbacks" element={<Feedbacks />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;