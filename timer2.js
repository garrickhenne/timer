// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const beep = () => {
  process.stdout.write('beep!');
  process.stdout.write('\x07');
  process.stdout.write('\n');
};

process.stdin.on('data', (key) => {
  if (key !== 'b' && key !== '\u0003' && isNaN(Number(key))) {
    process.stdout.write("Hmmm... didn't recognize that... trying typing a number or 'b'. :)\n");
    return;
  }
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n');
    process.exit();
  }
  if (key === 'b') {
    beep();
  }

  if (!isNaN(Number(key))) {
    process.stdout.write(`setting timer for ${key} seconds... \n`);
    setTimeout(() => {
      beep();
    }, Number(key) * 1000);
  }
});