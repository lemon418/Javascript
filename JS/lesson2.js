
// Задача №1
let num = [3, 4, 5, 3, 1, 7, 0];
let a = 0;
	for (let i = 0; i < num.length; i++) {
		for (let q = 0; q < num.length; q++) {
			if (num[i] + num[q] === 7) {
				console.log("сумма чисел " + num[i] + " и " + num[q] + " равна 7");
			}  
		}
		
	}
	

// Задача №2

		/*часть 1*/
for (let i = 1 ; i <= 100; i++) {

	if ((i % 5 === 0) && (i % 3 !== 0)) {
		console.log("Five");

	}
	else  if (i % 3 === 0) {
	console.log("Three");
	}
	else {
		console.log(i);
	}
}


		/*часть 2*/
for (let i = 1; i <= 100; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("ThreeFive");
	}
	else {
		console.log(i);
	}
}


// Задача №3


let plates = 10;
let wash = 20;
for (i = 1; (i <= plates) && (i <= wash); i++) {

	console.log("Осталось " + (plates - i) + " тарелок");
	wash = wash + 0.5; 
	console.log("Осталось " + (wash - i) + " моющего средства");
}

// Задача №4

let arr = [5, 6, 8];
let arr2 = [8, 6, 5];
console.log(arr);
console.log(arr2);

let sum = 0;
 for (i = 0; i < arr.length; i++) {
 	sum += arr[i];
 }
let result = sum / arr.length;
console.log("Среднее арифмитическое первого массива = " + result);	


let sum2 = 0;
 for (i = 0; i < arr2.length; i++) {
 	sum2 += arr2[i];
 }
 let result2 = sum2 / arr2.length;
console.log("Среднее арифмитическое второго массива = " + result2);

if (sum > sum2) {
	console.log("Средняя сумма первого массива больше");
}
else if (sum < sum2) {
	console.log("Средняя арифмитическая сумма второго массива больше");
}
else {
	console.log("средние арифметические суммы двух массивов равны");
}

// Задача №5
