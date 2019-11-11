// Задача №1

function sum(num) {
	if(num >= 1) {
		return (num % 10) + sum(Math.floor(num / 10));
	}
}
console.log(sum(321));

// Задача №2

let arr = [];

function range(start, end, step = 1) {
	while (start <= end) {
		arr.push(start);
		start = start + step;
	} 
}

range(1, 10, 3);
console.log(arr);

// Задача №3   
    //.вариант1

let str = "день";
let str2 = "дня";
let str3 = "дней";

function days(count) {
	if (count === 1) {
		console.log(count + " " + str);
	}

	if (count >= 2 && count <= 4) {
		console.log(count + " " + str2);
	}

	else {
		console.log(count + " " + str3);
	}
}
days(1);

    // Вариант№2


function days(count) {
	let le = `${count}`;
	if (le.lastIndexOf("1") === le.length - 1) {
		console.log(`${le} день`);
	}

	else if (le.lastIndexOf("2") ||
	    le.lastIndexOf("3") ||
	    le.lastIndexOf("4") === le.length - 1) {
		console.log(`${le} дня`);
	}

	else {
		console.log(`${le} дней`);
	}
	
}

days(5);

	// Задача№4















