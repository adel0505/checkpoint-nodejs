const fs = require('fs');

try {
    buff = fs.readFileSync(process.argv[2]);
    console.log(buff.toString().split('\n').length - 1);

} catch (error) {
    console.log("error:" + error);

}