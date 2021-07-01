const fs = require('fs');
fs.readdir(process.argv[2], 'utf8', (err, res) => {
    if (err) throw console.log("error 0:" + err);
    filtered = res.filter(el => el.endsWith("." + process.argv[3]));
    filtered.map(el => console.log(el));

})