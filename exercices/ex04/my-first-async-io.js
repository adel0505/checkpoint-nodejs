const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, res) => {
    if (err) throw console.log("error 0:" + err);
    console.log(res.toString().split('\n').length - 1);
})