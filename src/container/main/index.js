import React from 'react';
import Content from '../../components/content';
import Header from '../../components/header';

function Main() {
    const [city, setCity] = React.useState('');

    return (
        <div className="container mx-auto">
            <Header city={city} setCity={setCity} />

            <Content city={city} />
        </div>
    );
}

export default Main;
