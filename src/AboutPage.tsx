import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>This is the About Page</h1>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default AboutPage;