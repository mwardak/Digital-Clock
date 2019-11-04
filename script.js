

let i = 0;

function increment() {
    let today = new Date();
    // let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const clock = time;

    const paragraph = document.getElementById("tmn");
    paragraph.textContent = today;
   
    i++;
    console.log(i);
}

setInterval(increment, 1000);