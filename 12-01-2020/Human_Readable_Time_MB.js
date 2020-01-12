/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

const format = (...val) => {
    return val.map(val => [...('0' + val)].splice(-2).join(''))
}

function humanReadable(seconds) {
    const hour = Math.floor(seconds / 3600);
    const min = Math.floor((seconds - hour * 3600) / 60);
    const sec =  Math.floor(seconds - (hour * 3600 + min * 60));

    return format(hour,min,sec).join().replace(/,/g, ':');
}

 console.log(humanReadable(359999));

 /*
 Alternatives: 
 function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}
*/