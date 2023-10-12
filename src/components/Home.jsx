import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {
    const user =useContext(AuthContext);
    console.log(user.displayName);
    return (
        <div>
            <h2>This is home</h2>
            
        </div>
    );
};

export default Home;