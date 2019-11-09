    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

  
//Задача №1

function getGoods(obj, from, to) {
	let back = {};
	for (let i in obj) {
	if (obj[i].price >= from && obj[i].price <= to) {
        let a = obj[i];	
        back[i] = obj[i];
        console.log(back);
	}
}
return back;
}
getGoods(goods, 3000, 4000);

//Задача №2


function addToCart(obj, title, countToCart) {
    for (let i in obj) {
        // if (obj[i].title = title && countToCart >= obj[i].count)
        if (countToCart <= obj[i].count)  {
            obj[i].count -= countToCart;
            console.log(`${obj[i].count}`);
        }
        else {
            console.log(`Недостаточное количество`);
        }
    }
}

addToCart(goods, "Флейта", 40);


//Задача №3

    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];


    function bookSort(arr) {
        arr.sort((a, b) => a.title.localeCompare(b.title));
        
    }

    bookSort(books);
    console.log(books);


