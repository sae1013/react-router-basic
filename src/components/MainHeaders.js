import React from 'react'
import classes from './MainHeaders.module.css';
import { NavLink } from 'react-router-dom';

function MainHeaders() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Product</NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
}

export default MainHeaders
