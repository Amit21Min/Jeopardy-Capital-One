import React from 'react';
import { NavLink } from "react-router-dom";
import './Homepage.css';

export default class Homepage extends React.Component {
    render() {
        const name = "Amit"
        return (
            <body className="body">

                <div>
                    <div className="header">
                        <h2>Welcome to {name}'s Jeopardy question database! </h2> 
                    </div>

                    <div className ="main">
                            
                        <div className="welcome">
                            <h2>About</h2> 
                            <p>Jeopardy has aired over 8,000 episodes since 1964. This webapp will allow you to
                                browse the over 150,000 possible trivia questions that exist! There are many ways to filter
                                your searches - you can find them all on the next page.
                            </p>
                            <div className="button">
                            <NavLink to="/SearchPage"> Start Searching! </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                            
            </body>

        )
    }
}
