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

let table = document.createElement("table");
let row = table.insertRow(0);

let cell1 = row.insertCell(0);
cell1.textContent = "привет"
let cell2 = row.insertCell(1);

let div = document.createElement("div");
document.body.append(div);

let b = document.createElement("p");
b.innerText = "Солнце";
document.body.append(b);



let div2 = document.createElement("div");