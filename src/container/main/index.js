import React from 'react';
import Content from '../../components/content';
import Header from '../../components/header';
import { DEFAULT_CITY } from '../../constants/index';

function Main() {
    const [city, setCity] = React.useState(DEFAULT_CITY);

    return (
        <div className="container mx-auto">
            <Header city={city} setCity={setCity} />

            <Content city={city} />
        </div>
    );
}

export default Main;
