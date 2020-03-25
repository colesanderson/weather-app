import React from 'react';
import { useParams } from 'react-router-dom';

function Content({ weather }) {
    let { id } = useParams();

    console.log('weather', weather);

    return (
        <div>
            <div>INFO SECTION</div>

            <div>LOCATION</div>
            <h3>ID: {id}</h3>
        </div>
    );
}

export default Content;
