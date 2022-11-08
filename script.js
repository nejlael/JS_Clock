//apl lheure locale

clock();

//fonction pr set lheure

function clock(){
    const date =  new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30; // 360/12=30
    const minute = minutes * 6; // 360/60=6
    const second = (seconds + date.getMilliseconds()/1000) / 60 * 360 ;


// afficher

document.querySelector('.heure').style.transform = `rotateZ(${hour}deg)`;
document.querySelector('.minute').style.transform = `rotateZ(${minute}deg)`;
document.querySelector('.seconde').style.transform = `rotateZ(${second}deg)`;

requestAnimationFrame(clock)
}

