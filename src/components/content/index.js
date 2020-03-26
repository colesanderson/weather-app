import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMonthInfo, getDayInfo, getBgTemp } from '../../utils/index';
import mockData from '../../data/mock.json';
import { API_KEY } from '../../constants/index';
import TodayWeather from './today-weather';

function Content({ city }) {
    const [cityInfo, setCityInfo] = useState({});
    const [error, setError] = useState('');

    // let { id } = useParams();
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

    console.log('testing cityInfo', mockData);

    // Error from API request
    if (error) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-6xl">Error!!</h2>
            </div>
        );
    }

    // Api looks good and render city!
    if (Object.keys(mockData).length !== 0 && mockData.cod !== '404') {
        const list = mockData.list;

        console.log('list', list);

        return (
            <div className="border bg-white mt-8 rounded-lg">
                <TodayWeather currentData={list[0]} city={mockData.city.name} />

                <div>WEEKLY CONTENT</div>
            </div>
        );
    } else if (cityInfo.cod === '404') {
        // City not found!
        return (
            <div className="p-8 text-center">
                <h2 className="text-6xl">City not found</h2>
                <p>Please search again.</p>
            </div>
        );
    } else {
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
