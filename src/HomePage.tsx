import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const goToAboutPage = () => {
        navigate('/about');
    };

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            {/*<Link to="/about">Go to About Page</Link>*/}
            <button onClick={goToAboutPage}>Go to About Page</button>
        </div>
    );
};

export default HomePage;