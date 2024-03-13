enum Lang {
    EN = 'en',
    UA = 'ua-uk'
}

enum TimeUnit {
    second = 'second',
    minute = 'minute',
    hour = 'hour',
    day = 'day',
    month = 'month',
    year = 'year'
}

const timeValuesUkr: { [key: string]: any } = {
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
}
const timeValuesEng: { [key: string]: any } = {
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
}

const singularReg: RegExp = /^[0-9]*[^1]1$/
const numPluralReg: RegExp = /^[0-9]*[^1][234]$/

const checkNumReg = (num: number, regex: RegExp) => regex.test(num.toString())

interface ITime {
    [key: string]: Function
    pluralization: (language: string) => (timeNumber: number, timeType: string) => void;
}

const PluralizationUkrainian = (): ITime => ({
    pluralization(language: string) {
        return (timeNumber: number, timeType: string): void => {
            if(timeNumber === 1 || checkNumReg(timeNumber, singularReg)) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].singular}`)
            } else if(timeNumber >= 2 && timeNumber <= 4 || checkNumReg(timeNumber, numPluralReg)) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].exclusion}`)
            } else if(timeNumber >= 5) {
                console.log(`${language} | Через ${timeNumber} ${timeValuesUkr[timeType].plural}`)
            } else {
                throw Error('error')
            }
        }
    },
})
const PluralizationEnglish = (): ITime => ({
    pluralization(language: string) {
        return (timeNumber: number, timeType: string): void => {
            if(timeNumber === 1) {
                console.log(`${language} | In ${timeNumber} ${timeValuesEng[timeType].singular}`)
            } else if(timeNumber > 1) {
                console.log(`${language} | In ${timeNumber} ${timeValuesEng[timeType].plural}`)
            } else {
                throw Error('error')
            }
        }
    },
})

function createPluralization(lang: string): ITime {
    switch (lang) {
        case Lang.EN:
            return PluralizationEnglish();
        case Lang.UA:
            return PluralizationUkrainian();
        default:
            throw new Error('Invalid Lang type');
    }
}

const plurTime: ITime = createPluralization(Lang.UA);
plurTime.pluralization(Lang.UA)(1011101, 'day')