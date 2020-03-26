import React from 'react';
import { getMonthInfo, getDayInfo, getBgTemp } from '../../utils/index';
import Icon from '../../components/icon';
import { ReactComponent as CloudIcon } from '../../static/svg/cloud.svg';

function TodayWeather({ currentData, city }) {
    // Get Current date
    const currentMain = currentData.main;
    const currentMainWeather =
        currentData.weather.length > 0 ? currentData.weather : null;
    const currentTemp = Math.round(currentMain.temp);

    // Current Date
    const currentDate = new Date(1000 * currentData.dt);
    const outputMonth = getMonthInfo(currentDate.getMonth());
    const outputDay = getDayInfo(currentDate.getDay());

    // Set background colour based on temperature
    const tempBgColour = getBgTemp(currentTemp);

    // Get cloud percentage and output clouds in the background
    const coverClouds = () => {
        // Convert cloud percentage to 1 - 10
        const cloudCount = (Math.ceil(currentData.clouds.all / 10) * 10) / 10;

        let clouds = [];
        for (let i = 0; i < cloudCount; i++) {
            // Create cloud icons
            clouds.push(
                <Icon
                    key={i}
                    className="pointer-events-none opacity-25"
                    iconClasses="fill-current"
                    title="Search Icon"
                    Icon={CloudIcon}
                    width={200}
                    height={200}
                    // Randomize position clouds
                    style={{
                        position: 'absolute',
                        top: `${Math.floor(Math.random() * 100)}%`,
                        left: `${Math.floor(Math.random() * 100)}%`
                    }}
                />
            );
        }
        return clouds;
    };

    return (
        <div
            className={`md:flex md:flex-row-reverse flex-none items-center justify-between p-8 text-center text-white rounded-tl-lg rounded-tr-lg relative overflow-hidden ${tempBgColour}`}
        >
            <div className="flex-shrink w-full md:w-1/2 md:mb-0 mb-8">
                <h2 className="text-4xl">{city}</h2>
            </div>

            <div className="flex-shrink md:w-1/2 w-full">
                <div className="flex justify-center items-center mb-8">
                    {currentMainWeather && (
                        <div
                            className="inline-block rounded-full bg-white mr-4"
                            style={{ width: '50px', height: '50px' }} // image is 100px so will need to use fixed number
                        >
                            <img
                                src={`http://openweathermap.org/img/wn/${currentMainWeather[0].icon}@2x.png`}
                                alt={currentMainWeather[0].description}
                            />
                        </div>
                    )}

                    <div>
                        <span className="text-2xl">Today</span>

                        <span className="block text-sm">
                            {outputDay}, {outputMonth} {currentDate.getDate()}
                        </span>
                    </div>
                </div>

                <div className="mb-8">
                    <span className="block text-6xl">{currentTemp}&#8451;</span>

                    {currentMainWeather && (
                        <span className="block text-2xl">
                            {currentMainWeather[0].main}
                        </span>
                    )}
                </div>

                <div className="flex text-sm">
                    <div className="w-1/2 border-r border-solid border-white p-2">
                        <span className="block">Feels like</span>
                        <span className="block">
                            {Math.round(currentMain.feels_like)}
                            &#8451;
                        </span>
                    </div>

                    <div className="w-1/2 p-2">
                        <span className="block">Wind speed</span>
                        <span className="block">
                            {Math.round(currentData.wind.speed)} meter/sec
                        </span>
                    </div>
                </div>
            </div>

            <div>{coverClouds()}</div>
        </div>
    );
}

export default TodayWeather;
