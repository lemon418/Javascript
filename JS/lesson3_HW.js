// Задача №1

function sum(num) {
	if(num >= 1) {
		return (num % 10) + sum(Math.floor(num / 10));
	}
}
console.log(sum(321));











