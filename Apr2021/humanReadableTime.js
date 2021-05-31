function humanReadable(seconds) {
    const SECONDS_PER_MINUTE = 60;
    const SECONDS_PER_HOUR = 60 * 60;
    const SECONDS_PER_DAY = SECONDS_PER_HOUR * 24;

    let hours = Math.floor(seconds / SECONDS_PER_HOUR)
    let sec = seconds % SECONDS_PER_MINUTE;
    let mins = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);

    return [leadingZeros(hours),leadingZeros(mins),leadingZeros(sec)].join(":")

  }
  function leadingZeros(num) {
      return ("00" + num).slice(-2);
  }
  console.log(
    humanReadable(0),// '00:00:00', 'humanReadable(0)');
    humanReadable(5),// '00:00:05', 'humanReadable(5)');
    humanReadable(60),// '00:01:00', 'humanReadable(60)');
    humanReadable(86399),// '23:59:59', 'humanReadable(86399)');
    humanReadable(359999),// '99:59:59', 'humanReadable(359999)');
  )