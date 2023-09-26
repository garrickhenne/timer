// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
if (!process.argv[2]) {
  return;
}

const timers = process.argv.slice(2);

// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
for (let timer of timers) {
  timer = Number(timer);
  // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
  if (timer < 0 || isNaN(timer)) {
    continue;
  }
  // NOTE: arguments passed in are meant in seconds, so timer must be multiplied by 1000.
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer * 1000);
}

