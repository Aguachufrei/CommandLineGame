const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
process.stdin.setRawMode(true)
process.stdin.resume()
KHGO={};
process.stdin.on('keypress', (str, key) => {
    KHGO[key.name] = true;
    setTimeout(() => {
        KHGO[key.name] = false;
    }, 100);
});

const originalWrite = process.stdout.write;
function disableKeyboard() {
    process.stdout.write = () => {};
}
function enableKeyboard() {
    process.stdout.write = originalWrite;
}


async function spell(string, ms){
    enableKeyboard()
    process.stdout.write("\n");
    disableKeyboard()
    let skipped = false;
    const characterArray = string.split("");

    //Write character by character if space is pressed write everything
    for (let i = 0; i < characterArray.length; i++) {
        enableKeyboard();
        process.stdout.write(string[i]);
        disableKeyboard();
        if (!skipped) await sleep(ms);
        if (KHGO.space) skipped = true;
        KHGO.space = false;
    }

    //wait until space is pressed to continue
    while(!KHGO.space){
        await sleep(1);
    }
    enableKeyboard();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function(){
    await spell("Example text",40);
    await spell("Example text2",40);

    process.stdin.setRawMode(false)
    process.stdin.pause()
})();
