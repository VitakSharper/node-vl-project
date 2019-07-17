const os = require('os');

console.log('OS: ', os.platform());
console.log('OS: ', os.arch());
console.log('Proc: ', os.cpus())
console.log('Free Mem: ', os.freemem())
console.log('Total Mem: ', os.totalmem())
console.log('Home dir: ', os.homedir())
console.log('Time Os: ', os.uptime())
