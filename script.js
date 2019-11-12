
// display clock with AM:PM

function increment() {
       
    
    
    
    let today = new Date();
    let amPmString = "";
    if (today.getHours() < 12) {
        amPmString = "AM";
}   else {
        amPmString = "PM";
}
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +  amPmString
    
    let clock = time;

    const paragraph = document.getElementById("tmn").textContent = clock;  
       
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

    const x = document.getElementById("mw").textContent = setDate; 
    

// Toggle button for 12/24 hour display

function toggle() {
    
    let militaryTime = today.getHours();

    if (militaryTime < 12) {
       militaryTime = ;
    } else if (militaryTime === 0) {
        militaryTime = ;
    }
       
    

       document.getElementById("button").addEventListener('click', toggle);

    
        
    

}   



// function toggle()1{}


// 
    


setInterval(increment, 1000);


