let whyDate = new Date();
let day = whyDate.getDay();
let date = whyDate.getDate();
let year = whyDate.getFullYear();
let hours = whyDate.getHours();
let minutes = whyDate.getMinutes();
let secunds = whyDate.getSeconds();
let month = whyDate.getMonth() + 1;
let today;

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


function addingTheDesiredValue() {
    if (date < 10) {
        document.write(`Текущее время: 0${date}.`);
    } else {
        document.write(`Текущее время: ${date}.`);
    };

    if (month < 10) {
        document.write(`0${month}.${year}`);
    } else {
        document.write(`${month}.${year}`);
    };

    if (hours < 10) {
        document.write(` - 0${hours}`);
    } else {
        document.write(` - ${hours}`);
    };
    
    if (minutes < 10) {
        document.write(`.0${minutes}`);
    } else {
        document.write(`.${minutes}`);
    };
    if (secunds < 10) {
        document.write(`.0${secunds}<br>`);
    } else {
        document.write(`.${secunds}<br>`);
    };

}

function sayHello() {
    if (hours >= 4 && hours <= 11) {
        document.write('Доброе утро!<br>');
    } else if (hours >= 12 && hours <= 17){
        document.write('Добрый день!<br>');
    } else if (hours >= 18 && hours <= 23) {
        document.write('Добрый вечер!<br>');
    } else if (hours >= 24 && hours <= 4) {
        document.write('Доброй ночи!<br>');
    } else {
        document.write('Доброго времени суток!<br>');
    }
};

function isToday() {
    for (let key in days) {
        today = days[day - 1];
    };
    document.write(`Сегодня ${today}<br>`);
};

function daysLeftNewYear() {
    today = new Date()
    nextDate = new Date("January 1, 2022")
    msPerDay = 24 * 60 * 60 * 1000;
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    dayname = " ";
    ds = " " + daysLeft;
    dd=parseInt(ds.substr(ds.length-1));

    if(daysLeft > 4 && daysLeft < 21){ 
        dayname = " дней";
    } else if(dd==1){
        dayname = " день";
    }
    else if (dd == 2 || dd == 3 || dd == 4){
        dayname=" дня";
    } else dayname= " дней";

    document.write("До нового года осталось "+daysLeft+dayname+"!")
}

addingTheDesiredValue();
sayHello();
isToday();
daysLeftNewYear();

setInterval(function(){
	location.reload();
}, 1000);
