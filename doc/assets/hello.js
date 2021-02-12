async function main() {
    const start = Date.now();
    console.log('Press CTRL + C to end program');
    setInterval(() => {
        const elapsed = (Date.now() - start) / 1000;
        console.log('Elapsed:', elapsed.toFixed(1), 'seconds');
    }, 1000);
}

main();