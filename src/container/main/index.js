import React from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/search';
import Content from '../../components/content';

function Main({ weather }) {
    console.log('weather', weather);

    return (
        <div>
            <h1>Weather Forecast</h1>

            <div>
                <span>Search for city's weather forecast.</span>

                <Search />
            </div>

            <Content />
        </div>
    );
}

export default Main;
