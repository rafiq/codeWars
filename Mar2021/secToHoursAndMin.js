function toTime(seconds) {
    // const SECONDS_PER_HOUR = 3600;
    // const SECONDS_PER_MIN = 60;
    // let hoursAndMin = (seconds / SECONDS_PER_HOUR).toFixed(2);
    // let hours = hoursAndMin.split(".")[0]
    // let minutes = Math.floor((hoursAndMin.split(".")[1] / 100) * SECONDS_PER_MIN)

    // return `${hours} hour(s) and ${minutes} minute(s)`;
    return seconds % 3600 / 60;
    }
console.log(
    toTime(3600),//'1 hour(s) and 0 minute(s)');
    toTime(3601),//'1 hour(s) and 0 minute(s)');
    toTime(3500),//'0 hour(s) and 58 minute(s)');
    toTime(323500),//'89 hour(s) and 51 minute(s)');
    toTime(0),//'0 hour(s) and 0 minute(s)');
)