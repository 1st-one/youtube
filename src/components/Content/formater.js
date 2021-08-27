export const round = (count = 0, name = '') => {
    const reg = /(?<number>\d+)\.?(?<num>\d+)/;

    if (count.length <= 6 && count.length >= 4) {
        return (Math.round(count / 100) / 10 + ` тыс. ${name}`).replace(reg, '$<number>');
    } else if(count.length <= 3) {
        return count + ' ' + name;
    } else {
        return (Math.round(count / 1e5) / 10 + ` млн. ${name}`).replace(reg, '$<number>,$<num>');
    }
};

export const parseDate = (date = 0) => {
    let res = Math.round((Date.now() - Date.parse(date)) / (1000 * 60));
    let stringRes = res.toString();

    if (stringRes < 60) {
        return `${stringRes} минут назад`;
    }
    
    res = Math.round(res / 60);
    stringRes = res.toString();

    if (stringRes < 24) {
        switch (stringRes) {
            case '1':
                return `${res} час назад`;
            case '2':
            case '3':
            case '4':
                return `${res} часа назад`;
            default:
                return `${res} часов назад`;
        }
    }
    
    res = Math.round(res / 24);
    stringRes = res.toString();

    if (stringRes < 7) {
        switch (stringRes) {
            case '1':
                return `${res} день назад`;
            case '2':
            case '3':
            case '4':
                return `${res} дня назад`;
            default:
                return `${res} дней назад`;
        }
    }
   
    res = Math.round(res / 7);
    stringRes = res.toString();

    if (stringRes < 4) {
        switch (stringRes) {
            case '1':
                return `${res} неделю назад`;
            case '2':
            case '3':
                return `${res} недели назад`;
            default:
                return `${res} неделю назад`;
        }
    }

    res = Math.round(res / 4);
    stringRes = res.toString();

    if (stringRes < 12) {
        switch (stringRes) {
            case '1':
                return `${res} месяц назад`;
            case '2':
            case '3':
            case '4':
                return `${res} месяца назад`;
            default:
                return `${res} месяцев назад`;
        }
    }

    res = Math.round(res / 12);
    stringRes = res.toString();

    switch (stringRes) {
        case '1':
            return `${res} год назад`;
        case '2':
        case '3':
        case '4':
            return `${res} года назад`;
        default:
            return `${res} лет назад`;
    }
}