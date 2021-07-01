var mymodule = require('./mymodule.js');

var directory = process.argv[2]
var ext = process.argv[3];

mymodule(directory, ext, function(err, filtered) {
    if (err) {
        return console.error('error:', err);
    }

    filtered.map(el => console.log(el));
});