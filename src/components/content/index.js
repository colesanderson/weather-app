import React, { useState, useEffect } from 'react';

import TodayWeather from './today-weather';
import FiveDaysForecast from './five-days-forecast';

import { API_KEY } from '../../constants/index';

function Content({ city }) {
    const [cityInfo, setCityInfo] = useState({});
    const [error, setError] = useState('');

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCityInfo(data);
            })
            .catch((err) => {
                console.error('ERROR!', err);
                setError(err);
            });
    }, [url]);

    // Error from API request
    if (error) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-6xl">Error!!</h2>
            </div>
        );
    }

    // Api looks good and render city!
    if (Object.keys(cityInfo).length !== 0 && cityInfo.cod !== '404') {
        const cityListInfo = cityInfo.list;

        return (
            <div className="border bg-white mt-8 rounded-lg">
                <TodayWeather
                    currentData={cityListInfo[0]}
                    city={cityInfo.city.name}
                />

                <FiveDaysForecast data={cityListInfo} />
            </div>
        );
    } else if (cityInfo.cod === '404') {
        // City not found!
        return (
            <div className="p-8 text-center">
                <h2 className="text-6xl">"{city}" city not found</h2>
                <p>Please search again.</p>
            </div>
        );
    } else {
        // Loading
        return (
            // Copy code from https://loading.io/css/ to save time
            <div className="text-center p-8">
                <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Content;
