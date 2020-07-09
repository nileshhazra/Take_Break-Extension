

setInterval(clock,10);
function clock () { 
    var day = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday', 'Saturday'];
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(sec<10)
    sec = '0'+sec;
    if(min<10)
    min = '0'+min;
    if(hrs<10)
    hrs = '0'+hrs;
 
 document.getElementById("date").innerHTML = hrs +":"+ min +":"+sec;
 document.getElementById("day").innerHTML = day[time.getDay()];
}

