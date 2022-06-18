
export const addIntervaltoDate = (date: Date, amount: number, unit: string) => {
    const conversions = {
        second: 1000,
        minute: 60000,
        hour: 3600000,
        day: 24 * 60 * 60000,
        week: 7 * 24 * 60 * 60000
    };

    let result = new Date(date.getTime() + (amount * conversions[unit]));

    return result;
}