import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMonthInfo, getDayInfo } from '../../utils/index';
import mockData from '../../data/mock.json';
import { API_KEY } from '../../constants/index';

function Content({ city }) {
    const [cityInfo, setCityInfo] = useState({});
    const [error, setError] = useState('');

    // let { id } = useParams();

    console.log('city', city);

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // TODO add error
    //             // if (data.cod === 401) {
    //             //     throw new Error('ERROR!');
    //             // }
    //             setCityInfo(data);
    //         })
    //         .catch((err) => {
    //             console.log('ERROR!', err);
    //             setError(err);
    //         });
    // }, [url]);

    if (mockData) {
        const list = mockData.list;

        // Get Current date
        const getCurrentDate = list[0];
        const currentMain = getCurrentDate.main;
        const currentMainWeather = getCurrentDate.weather;
        const currentTemp = Math.round(currentMain.temp);

        // Current Date
        const currentDate = new Date(1000 * getCurrentDate.dt);
        const getMonth = currentDate.getMonth();
        const getDate = currentDate.getDate();
        const getDay = currentDate.getDay();
        const outputMonth = getMonthInfo(getMonth);
        const outputDay = getDayInfo(getDay);

        console.log('getCurrentDate', currentMainWeather);

        // Set background colour based on temperature
        // COLD = blue
        // WARM = orange
        // HOT = red

        let tempBgColour;
        if (currentTemp < -20) {
            tempBgColour = 'bg-blue-800';
        } else if (currentTemp < -10) {
            tempBgColour = 'bg-blue-800';
        } else if (currentTemp < 0) {
            tempBgColour = 'bg-blue-600';
        } else if (currentTemp < 5) {
            tempBgColour = 'bg-blue-400';
        } else if (currentTemp < 10) {
            tempBgColour = 'bg-orange-400';
        } else if (currentTemp < 15) {
            tempBgColour = 'bg-orange-600';
        } else if (currentTemp < 20) {
            tempBgColour = 'bg-orange-800';
        } else if (currentTemp < 25) {
            tempBgColour = 'bg-red-400';
        } else {
            tempBgColour = 'bg-red-800';
        }

        return (
            <div className="border border-red-500 mt-8 rounded-lg text-white">
                {/* Header */}
                <div className={tempBgColour}>
                    <div>
                        {currentMainWeather.length > 0 && (
                            <img
                                src={`http://openweathermap.org/img/wn/${currentMainWeather[0].icon}@2x.png`}
                                alt={currentMainWeather[0].description}
                            />
                        )}

                        {/* Icon */}

                        <h3>Today</h3>

                        <span className="block">
                            {outputDay}, {outputMonth} {getDate}
                        </span>

                        <span className="block">{currentTemp}&#8451;</span>

                        {currentMainWeather.length > 0 && (
                            <span className="block">
                                {currentMainWeather[0].main}
                            </span>
                        )}

                        <span className="block">
                            Feels like {Math.round(currentMain.feels_like)}
                            &#8451; | Wind speed{' '}
                            {Math.round(getCurrentDate.wind.speed)} meter/sec
                        </span>
                    </div>

                    <div>
                        <h2>{mockData.city.name}</h2>
                    </div>
                </div>

                {/* Header */}
                <div>WEEKLY CONTENT</div>
            </div>
        );
    } else {
        return <div>TODO???</div>;
    }
}

export default Content;
