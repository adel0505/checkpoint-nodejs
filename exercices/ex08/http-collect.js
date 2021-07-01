var http = require('http');
const bl = require('bl')

const url = process.argv[2];
http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) throw console.log(err);
        console.log(data.length);
        console.log(data.toString());

    }))

});