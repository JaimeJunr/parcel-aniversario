AOS.init();

const eventDate = new Date("March 11,2024, 02:00:00");
const timeStampEvent = eventDate.getTime();
const datePicker = $('#dateCont')

const cont = 
setInterval(function(){
    const timeStampDate = new Date().getTime(); 

    const contTime = timeStampEvent - timeStampDate;

    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const min = 1000 * 60;

    const daysUntil = Math.floor(contTime / day);
    const hoursUntil = Math.floor((contTime % day) / hour);
    const minUntil = Math.floor((contTime %  hour) / min);
    const segUntil = Math.floor((contTime %  min) / 1000);

    datePicker.html(`${daysUntil}d ${hoursUntil}h ${minUntil}m ${segUntil}s`)

    if (contTime < 0){
        clearInterval(cont);
        datePicker.html("O evento já acabou")
    }
}, 1000);

