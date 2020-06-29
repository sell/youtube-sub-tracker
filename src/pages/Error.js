import React from 'react';
import { Link } from 'react-router-dom';

function Error({location}) {
    return (
        <div className="error-page">
            <div>
                <p className="text-center">404 Error</p>
                <p> {location.pathname} doesn't exist </p>
            </div>
            <div>
                <Link to='/'>Go Home</Link>
            </div>   
        </div>
    )
}

export default Error;