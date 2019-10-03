console.log(process.pid);

console.log(process.version);

console.log(process.argv);

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

process.stdout.write('GreenRoots Blog\n');

process.stdin.on('data', data => {
    console.log(`You typed ${data.toString()}`);
    process.exit();
});
