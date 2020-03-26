export const getMonthInfo = (month) => {
    let outputMonth;

    switch (month) {
        case 0:
            outputMonth = 'Jan';
            break;
        case 1:
            outputMonth = 'Feb';
            break;
        case 2:
            outputMonth = 'Mar';
            break;
        case 3:
            outputMonth = 'Apr';
            break;
        case 4:
            outputMonth = 'May';
            break;
        case 5:
            outputMonth = 'Jun';
            break;
        case 6:
            outputMonth = 'Jul';
            break;
        case 7:
            outputMonth = 'Aug';
            break;
        case 8:
            outputMonth = 'Sep';
            break;
        case 9:
            outputMonth = 'Oct';
            break;
        case 10:
            outputMonth = 'Nov';
            break;
        case 11:
            outputMonth = 'Dec';
            break;
        default:
            outputMonth = null;
    }

    return outputMonth;
};

export const getDayInfo = (day) => {
    let outputDay;

    switch (day) {
        case 0:
            outputDay = 'Sun';
            break;
        case 1:
            outputDay = 'Mon';
            break;
        case 2:
            outputDay = 'Tues';
            break;
        case 3:
            outputDay = 'Wed';
            break;
        case 4:
            outputDay = 'Thurs';
            break;
        case 5:
            outputDay = 'Fri';
            break;
        case 6:
            outputDay = 'Sat';
            break;
        default:
            outputDay = null;
    }

    return outputDay;
};
