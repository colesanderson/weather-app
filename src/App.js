import React, { Suspense, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation,
    useHistory
} from 'react-router-dom';
import Main from './container/main';
import { DEFAULT_CITY } from './constants/index';

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
            history.push(DEFAULT_CITY);
        }
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Switch>
            <Route path="/:id" children={<Main />} />
        </Switch>
    );
}

function App() {
    return (
        <div className="p-4 bg-blue-100 h-screen">
            <Suspense fallback={<Loading />}>
                <Router>
                    <ProjectRoutes />
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
