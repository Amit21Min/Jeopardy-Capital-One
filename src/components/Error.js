import React from 'react';
import { NavLink } from "react-router-dom";

// if user ends up on wrong URL, redirect to homepage
const Error = () => {
        return (
            <div>
                <p>
                   
                    <NavLink to="/"> This path doesn't exist! Take the link back to the homepage</NavLink>
                </p>
            </div>

        )
}

export default Error;