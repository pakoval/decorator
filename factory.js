"use strict";
var Lang;
(function (Lang) {
    Lang["EN"] = "en";
    Lang["UA"] = "ua-uk";
})(Lang || (Lang = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["second"] = "second";
    TimeUnit["minute"] = "minute";
    TimeUnit["hour"] = "hour";
    TimeUnit["day"] = "day";
    TimeUnit["month"] = "month";
    TimeUnit["year"] = "year";
})(TimeUnit || (TimeUnit = {}));
const timeValuesUkr = {
    [TimeUnit.second]: {
        singular: 'секунду',
        exclusion: 'секунди',
        plural: 'секунд',
    },
    [TimeUnit.minute]: {
        singular: 'хвилину',
        exclusion: 'хвилини',
        plural: 'хвилин',
    },
    [TimeUnit.hour]: {
        singular: 'годину',
        exclusion: 'години',
        plural: 'годин',
    },
    [TimeUnit.day]: {
        singular: 'день',
        exclusion: 'дні',
        plural: 'днів',
    },
    [TimeUnit.month]: {
        singular: 'місяць',
        exclusion: 'місяці',
        plural: 'місяців',
    },
    [TimeUnit.year]: {
        singular: 'рік',
        exclusion: 'роки',
        plural: 'років',
    },
};
const timeValuesEng = {
    [TimeUnit.second]: {
        singular: 'second',
        plural: 'seconds',
    },
    [TimeUnit.minute]: {
        singular: 'minute',
        plural: 'minutes',
    },
    [TimeUnit.hour]: {
        singular: 'hour',
        plural: 'hours',
    },
    [TimeUnit.day]: {
        singular: 'day',
        plural: 'days',
    },
    [TimeUnit.month]: {
        singular: 'month',
        plural: 'months',
    },
    [TimeUnit.year]: {
        singular: 'year',
        plural: 'years',
    },
};
const singularReg = /^[0-9]*[^1]1$/;
const numPluralReg = /^[0-9]*[^1][234]$/;
const checkNumReg = (num, regex) => regex.test(num.toString());
const PluralizationUkrainian = () => ({
    pluralization(language) {
        return (timeNumber, timeType) => {
            if (timeNumber === 1 || checkNumReg(timeNumber, singularReg)) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].singular}`);
            }
            else if (timeNumber >= 2 && timeNumber <= 4 || checkNumReg(timeNumber, numPluralReg)) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].exclusion}`);
            }
            else if (timeNumber >= 5) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].plural}`);
            }
            else {
                throw Error('error');
            }
        };
    },
});
const PluralizationEnglish = () => ({
    pluralization(language) {
        return (timeNumber, timeType) => {
            if (timeNumber === 1) {
                console.log(`${language} | In ${timeNumber} ${timeValuesEng[timeType].singular}`);
            }
            else if (timeNumber > 1) {
                console.log(`${language} | In ${timeNumber} ${timeValuesEng[timeType].plural}`);
            }
            else {
                throw Error('error');
            }
        };
    },
});
function createPluralization(lang) {
    switch (lang) {
        case Lang.EN:
            return PluralizationEnglish();
        case Lang.UA:
            return PluralizationUkrainian();
        default:
            throw new Error('Invalid Lang type');
    }
}
const plurTime = createPluralization(Lang.UA);
plurTime.pluralization(Lang.UA)(1011101, 'day');
