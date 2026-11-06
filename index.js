
function createcolck(){
    const day = new Date();
    let hours = day.getHours().toString().padStart(2,0);
    const meridiem = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12 ;
    const minutes = day.getMinutes().toString().padStart(2,0);
    const seconds = day.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent =timestring;
}

createcolck();
setInterval(createcolck,1000);