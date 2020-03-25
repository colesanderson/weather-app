import React from 'react';

function Icon({ Icon, title, width = 24, height = 24 }) {
    return (
        <div className="inline-block">
            <Icon
                focusable="false"
                aria-hidden="true"
                width={width}
                height={height}
            />

            <span className="sr-only">{title}</span>
        </div>
    );
}

export default Icon;
