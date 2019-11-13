
// display clock with AM:PM
function isMilitaryTime()
    let militaryTime = new Date();
    let toggle = militaryTime.getHours();
    
    x = "";

    if (toggle === true) {
        x = toggle;
}   else if (isMilitaryTime === false) {
        x-= toggle;
}


function increment() {
       

    const today = new Date();
    let amPmString = "";
    if (today.getHours() < 12) {
        amPmString = "AM";
}   else {
        amPmString = "PM";
}
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +  amPmString
    
    const clock = time;

    const paragraph = document.getElementById("tmn").textContent = clock;  
       




//display the month and weekday

    const dte = new Date();

    const monthly= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const year = today.getFullYear();

    
    const month = monthly[dte.getMonth()];
    const mDay = weekday[dte.getDay()];
    const nDay = dte.getDate();

    const setDate =  mDay + ", " + month + ", "+ nDay + ", " + year;

    const x = document.getElementById("mw").textContent = setDate; 
    

// Toggle button for 12/24 hour display


    

    

   
        

     document.getElementById("button").addEventListener('click', isMilitaryTime);
}    





setInterval(increment, 1000);


