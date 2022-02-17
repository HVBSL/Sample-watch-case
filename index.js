var black= document.getElementById('black');
var red = document.getElementById('red');
var sandal = document.getElementById('sandal');
var brown = document.getElementById('brown');

var blackimg = document.getElementById('watch1');
var redimg = document.getElementById('watch2');
var sandalimg = document.getElementById('watch3');
var brownimg = document.getElementById('watch4');


function remove() {
    blackimg.style.display='none';
    redimg.style.display='none';
    sandalimg.style.display='none';
    brownimg.style.display='none';
}

black.addEventListener('click',function() {
    remove();
    blackimg.style.display='block';
});

red.addEventListener('click',function() {
    remove();
    redimg.style.display='block';
});
sandal.addEventListener('click',function() {
    remove();
    sandalimg.style.display='block';
});
brown.addEventListener('click',function() {
    remove();
    brownimg.style.display='block';
});


var timebtn = document.getElementById('time');
var ctime = document.getElementById('ctime');
var heart= document.getElementById('heartbtn');
var heartrate= document.getElementById('heart-rate');

function showTime() {
    var date = new Date();
    
    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // console.log(time);
    
    
    ctime.innerHTML= time;
}

timebtn.addEventListener('click',function() {
    heartrate.style.display= 'none';
    ctime.style.display='block';

    setInterval( showTime, 1000);

});
heart.addEventListener('click', function(){
    heartrate.style.display= 'block';
    ctime.style.display='none';
    console.log("gnbvbvf");
});