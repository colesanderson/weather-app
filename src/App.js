import React, { Suspense, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation,
    useHistory
} from 'react-router-dom';
import Main from './container/main';

import mockData from './data/mock.json';

function Loading() {
    return <span>Loading...</span>;
}

function ProjectRoutes() {
    const { pathname } = useLocation();
    const history = useHistory();
    const isRootLocation = pathname === '/';

    useEffect(() => {
        // If user land to root location and it will redirect to vancouver location as default
        if (isRootLocation) {
            history.push('vancouver');
        }
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Switch>
            <Route path="/:id" children={<Main weather={mockData} />} />
        </Switch>
    );
}

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <Router>
                    <ProjectRoutes />
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
