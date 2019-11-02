// Задача №1


function sum(num) {
	if(num >= 1) {
		return (num % 10) + sum(Math.floor(num / 10));
	}
}




console.log(sum(321));

function range(start, end, step = 1) { //start = start + step, то же что и start += step

	// step = 1 шаг по умолчанию
	
	let arr = [];

	for (let i = 0; start < end; i++) {
		arr[i] = start;
	}

	return arr;

}

console.log(range(1, 10, 2));
console.log(range(6, 10, 3));



Написать функцию - конвертер строки.
Принимает на вход строку и флаг.
Возвращает пребразованную строку
Возможности (в зависимости от флага)
1. перевод всех символов в нижний регистр
2. перевод всех символов в верхний регистр
3. перевод всех символов в нижний регистр, и первых слов в верхний









