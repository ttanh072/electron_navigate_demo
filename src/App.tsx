// App.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    MemoryRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
};


export default App;