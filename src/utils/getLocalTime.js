
export const localTime = (timezone) => {
    let year = new Date().getFullYear();
    let day = new Date().getUTCDate();
    let month = new Date().getUTCMonth();
    let minute = new Date().getUTCMinutes();
    let hours = new Date().getUTCHours() + timezone /60 /60;
    let TimeWithUTCDifference = new Date(year, month, day, hours, minute);
    return TimeWithUTCDifference;
}
