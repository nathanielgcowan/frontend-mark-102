import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <p>Welcome</p>
            <Link to="secondview">
                <button>Go to second view</button>
            </Link>
        </div>
    )
}