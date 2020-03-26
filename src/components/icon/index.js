import React from 'react';

function Icon({
    Icon,
    title,
    width = 24,
    height = 24,
    style,
    className,
    iconClasses
}) {
    return (
        <div className={`inline-block ${className}`} style={style}>
            <Icon
                className={iconClasses}
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
