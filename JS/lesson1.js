let num = 4;
result = num & 1 ? "Нечетное число" : "Четное число";
console.log(result);

let num2 = 4;
result2 = num2 % 2 == 0 ? "Нечетное число" : "Четное число";
console.log(result2);

let num3 = 9;
let num4 = 8;
result3 = Math.abs(10 - num3) < Math.abs(10 - num4) ?  "Первое число ближе к 10" : "Второе число ближе к 10";
console.log(result3);

height = 11;
length = 7;
width =12;
square = (height * length + length * width + height * width) * 2;
console.log(square);
info = width > height ? "Ширина больше, чем высота" : "Высота больше чем длина (равна длине)";
console.log(info);
