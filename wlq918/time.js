function getNowDate(clock){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    var time = year+"年"+month+"月"+day+"日 "+h+":"+m+":"+s;
    clock.innerHTML=time;
}

window.onload = function(){
    var clock = document.getElementById("clock");
    window.setInterval("getNowDate(clock)",1000);
}