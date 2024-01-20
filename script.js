let hourBox = document.querySelector('#hourNumberBox');
let minBox = document.querySelector('#minNumberBox');
let secBox = document.querySelector('#secNumberBox');


let hour = document.querySelector('#hourNumber');
let hour1 = document.querySelector('#hour1');
let hour2 = document.querySelector('#hour2')

let min = document.querySelector('#minNumber');
let min1 = document.querySelector('#min1');
let min2 = document.querySelector('#min2')

let sec = document.querySelector('#secNumber');
let sec1 = document.querySelector('#sec1');
let sec2 = document.querySelector('#sec2')


setInterval(() => {
    // data
    const  time = new Date();

    // Hour
    hour = time.getHours()
    hour1.innerHTML = Math.floor(hour/10);
    hour2.innerHTML = (hour%10);
    let sumhour;
    if(hour<=12){
        sumhour = hour * 8.33;
    }
    else{
        sumhour = (hour-12)*8.333;
    }


    
    hourBox.style.background = `conic-gradient(
        #41eb0d 0% ${sumhour}%,
        
        #333 ${sumhour}% 100%
    )`;

    // Minutes
    min = time.getMinutes()
    min1.innerHTML = Math.floor(min/10);
    min2.innerHTML = (min%10);

    let summin = min*1.66;
    minBox.style.background = `conic-gradient(
        rgb(33, 198, 204) 0% ${summin}%,
        
        #333 ${summin}% 100%
    )`;

    // Seconds
    sec = time.getSeconds()
    sec1.innerHTML = Math.floor(sec/10);
    sec2.innerHTML = (sec%10);
    let sumsic = sec*1.66;
    secBox.style.background = `conic-gradient(
        blue 0% ${sumsic}%,
        
        #333 ${sumsic}% 100%
    )`;


}, 1000);