import React from 'react';
import { getDayInfo } from '../../utils/index';

function TodayWeather({ data }) {
    let fiveDaysForecast = [];

    // Get the last 5 days of weather forecast
    for (let i = 0; i < data.length; i += 8) {
        fiveDaysForecast.push(data[i]);
    }

    return (
        <div className="p-8">
            {fiveDaysForecast.map((day) => {
                const currentDate = new Date(1000 * day.dt);
                const outputDay = getDayInfo(currentDate.getDay(), true);
                const dayWeather = day.weather.length > 0 ? day.weather : null;

                return (
                    <div
                        key={day.dt}
                        className="md:flex flex-none items-center border-gray-300 border-solid border-b mb-4 pb-4"
                    >
                        <div
                            className="text-2xl mr-6 flex items-center"
                            style={{ minWidth: '140px' }}
                        >
                            {outputDay}

                            {dayWeather && (
                                <div
                                    className="inline-block md:hidden"
                                    style={{
                                        width: '50px',
                                        height: '50px'
                                    }} // image is 100px so will need to use fixed number
                                >
                                    <img
                                        src={`http://openweathermap.org/img/wn/${dayWeather[0].icon}@2x.png`}
                                        alt={day.weather[0].description}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between w-full">
                            {dayWeather && (
                                <div
                                    className="md:block hidden"
                                    style={{
                                        width: '50px',
                                        height: '50px'
                                    }} // image is 100px so will need to use fixed number
                                >
                                    <img
                                        src={`http://openweathermap.org/img/wn/${dayWeather[0].icon}@2x.png`}
                                        alt={day.weather[0].description}
                                    />
                                </div>
                            )}

                            <div>
                                Temperature: {Math.round(day.main.temp)}
                                &#8451;
                            </div>

                            <div>
                                Low: {Math.round(day.main.temp_min)}
                                &#8451;
                            </div>

                            <div>
                                High: {Math.round(day.main.temp_max)}
                                &#8451;
                            </div>

                            <div>Humidity: {day.main.humidity}%</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TodayWeather;
