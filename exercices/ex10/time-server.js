const net = require('net');
const PortNumber = process.argv[2];

function zeroPad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}
const server = net.createServer(function(socket) {
    let date = new Date();

    YYYY = date.getFullYear();
    MM = zeroPad(date.getMonth() + 1);
    DD = zeroPad(date.getDate());
    hh = zeroPad(date.getHours());
    mm = zeroPad(date.getMinutes());
    data = `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
    socket.end(data + '\n');


})
server.listen(PortNumber)