import React from 'react';  // Required for JSX transpilation even if not used directly
import ReactDOM from 'react-dom/client';
import App from "./App";

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
} else {
    console.error('Failed to find the root element');
}