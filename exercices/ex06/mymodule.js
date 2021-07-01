const fs = require('fs');

module.exports = function(directory, ext, callback) {
    fs.readdir(directory, 'utf8', (err, res) => {
        if (err) return callback(err);
        filtered = res.filter(el => el.endsWith("." + ext));
        return callback(null, filtered);

    })
}