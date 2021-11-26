const readlineSync = require('readline-sync')
const Thermostat = require("./thermostat.js")

thermostat = new Thermostat
console.log('Temperature is ' + thermostat.getTemperature());

command = readlineSync.question('Enter command ');
while (true) {
if (command === 'up') {
    thermostat.up()
    console.log('Temperature is ' + thermostat.getTemperature());
}
if (command === 'down') {
    thermostat.down()
    console.log('Temperature is ' + thermostat.getTemperature());
}
if (command === 'psm on') {
   thermostat.setPowerSavingMode(true)
   console.log('Power saving mode is now turned on'); 
}
if (command === 'psm off') {
    thermostat.setPowerSavingMode(false)
    console.log('Power saving mode is now turned off');
}
if (command === 'exit') {
    break;
}
command = readlineSync.question('Enter command ');
}

