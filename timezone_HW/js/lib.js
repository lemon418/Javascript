let someDateTime = moment('2019-12-28 22:15');
let moscow = someDateTime.tz("Europe/Moscow");
let new_york = moscow.clone().tz("America/New_York").add(10, 'hours'); 
let mscForm = moscow.format("YYYY MMMM DD HH:mm");
let NYForm = new_york.format("YYYY MMMM DD HH:mm");
console.log(`Вылет из Москвы: ${mscForm}`);
console.log(`Прилет в Нью-Йорк: ${NYForm}`);