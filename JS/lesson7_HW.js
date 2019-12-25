// Задача №1

let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
];

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

function generateTable(table) {
let key = []; // created array for keys 
    let tbl = document.createElement("tbody");
    tbl.classList.add("border");
    document.body.append(tbl);
    let tr = document.createElement("tr");
    for (let i = 0; i < table.length; i++) {
        let row = tbl.insertRow(i);
         for (item  in table[i]) {
                let cell = row.insertCell();
                cell.innerText = table[i][item];          
                if (key.includes(item)) continue; //only one time key shall be put in array
                key.push(item);      
        }
    }
    let rowHd = tbl.insertRow(0);
    for (let k = 0; k < key.length; k++) {  //loop for property heads
        let th = document.createElement("th");
        rowHd.append(th);
        th.innerText = key[k];
    }
}
generateTable(articles);


let th = document.querySelectorAll('th');

for (let c = 0; c < th.length; c++) {
    th[c].addEventListener('click', elem(c))
}

function elem(c) {
    return function(){
        sortTable(c);
    }
}

function sortTable(c) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector('.border');
    switching = true;
    while(switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].cells[c];
            y = rows[i + 1].cells[c];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true; 
                break;   
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

}







