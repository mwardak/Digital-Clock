
// display clock with AM:PM

let i = 0;

function increment() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const clock = time;

    const paragraph = document.getElementById("tmn").textContent = clock;
    
    
    const militaryTime = ["AM", "PM"];

    if (clock < 12) {
        return militaryTime[0];
    } else {
        return militaryTime[1];
}
   
    const ampm = document.getElementById("ap").textContent = militaryTime;
    

    i++;
    
    console.log(i);
}



//display the month and weekday

    const dte = new Date();

    const monthly= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const year = 2019;

    
    const month = monthly[dte.getMonth()];
    const mDay = weekday[dte.getDay()];
    const nDay = dte.getDate();

    const setDate =  mDay + ", " + month + ", "+ nDay + ", " + year;

    const x = document.getElementById("mw"); 
    x.textContent = setDate; 

    console.log(setDate);






setInterval(increment, 1000);


