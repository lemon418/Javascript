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

let key = []; // created array for keys 
function generateTable(table) {
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
generateTable(goods);

