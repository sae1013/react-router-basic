import React from 'react'
import {Route} from 'react-router-dom';
function Welcome() {
    return (
        <section>
            <h1>This is welcome page</h1>
            <Route path ="/welcome/new-user">
                <p>Welcome New User!</p>
            </Route>
            
        </section>
        
    )
}

export default Welcome
