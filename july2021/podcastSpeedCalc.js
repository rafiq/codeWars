function speedListen(audioLength, playSpeed) {
    let newAudioLength = "";

    const timeArr = audioLength.split(":").map(x => parseInt(x));
    const seconds = timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2];

    const newSeconds = Math.floor(seconds / playSpeed)

    newAudioLength = secondsToTime(newSeconds)

    return newAudioLength;

  }

  const padNum = (x) => x.toString().length === 1 ? `0${x.toString()}` : x.toString()

  const secondsToTime = (sec) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec - hours * 3600) / 60);
    const seconds = sec - (hours * 3600 + minutes * 60);

    return [hours, minutes, seconds].map(padNum).join(":");
  }
console.log(
   speedListen("00:30:00", 2),// "00:15:00");
   speedListen("01:20:00", 1.5),// "00:53:20");
)