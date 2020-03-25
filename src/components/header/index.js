import React from 'react';
import Search from '../../components/search';

function Header({ city, setCity }) {
    return (
        <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="flex-grow">
                <h1 className="text-4xl">Weather Forecast</h1>
            </div>

            <div className="flex-shrink w-56 mt-8 w-full md:mt-0 md:w-auto">
                <span className="sr-only">
                    Search for city's weather forecast.
                </span>

                <Search city={city} setCity={setCity} />
            </div>
        </div>
    );
}

export default Header;
