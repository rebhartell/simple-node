const SAY_HELLO_TO = process.env.SAY_HELLO_TO;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Hello ${SAY_HELLO_TO}`);
    await sleep(5000);
  }
}

main();
