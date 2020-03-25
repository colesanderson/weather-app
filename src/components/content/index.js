import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import mockData from '../../data/mock.json';

function Content({ city }) {
    let { id } = useParams();

    console.log('city', city);

    // console.log('weather', weather);
    // console.log('test ****', test);

    // const foo = React.useMemo(() => {
    //     return weather;
    // }, [weather]);
    // console.log('foo', foo);

    // http://api.openweathermap.org/data/2.5/forecast?q=Vancouver&units=metric&appid=1aadcabf74bb24b2db0466ef732afac4

    React.useEffect(() => {});

    if (mockData) {
        return (
            <div className="border border-red-500 mt-8">
                <div>INFO SECTION</div>

                <div>
                    <div></div>

                    <div></div>
                </div>

                <div>{mockData.city.name}</div>

                <h3>ID: {id}</h3>
            </div>
        );
    } else {
        return <div>TODO???</div>;
    }
}

export default Content;
