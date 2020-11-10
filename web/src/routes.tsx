import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMaps from './pages/OrphanagesMaps';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OrphanagesMaps}/>
        </BrowserRouter>
    );
}

export default Routes;

