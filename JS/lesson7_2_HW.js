// Задача №2

function fieldGen(n) {

    let tabl = document.createElement("tbody");
    tabl.classList.add("bg1");
    document.body.append(tabl);

    for (let i = 1; i <= n; i++) {
            let row = tabl.insertRow(); 

            for (let c = 1; c <= n; c++) {
                let cell1 = row.insertCell();
                cell1.classList.add("bg2");
        
            }
    }

    let td = document.querySelectorAll('.bg2');
    

    let arr = [];
    let math = null
    for (let i = 1; i <=3; i++) {
    math = Math.floor(Math.random() * (25 - 0));

        for (let c = 0; c <= arr.length; c++) {
            if (math === arr[c]) {
                i--;
            }
        }

    console.log(math);
    td[math].classList.add("prize");
    arr.push(math);
    }
    console.log(arr);


    let prize = document.querySelectorAll('.prize');

    for (let item of prize) {
        item.onclick =
        function win() {
        this.innerHTML = 'ПРИЗ!!!';
        this.classList.add('bg3');
        }
    }

    let count = 3;
    let cnt = document.querySelector('.bg1');
    let attempt = document.querySelector('#count');
    
    cnt.onclick =
    function win() {
    // console.log(count);
        if (count === 1) {
            attempt.innerHTML = "Попыток больше нет";
        }
        else {
         count--;
            attempt.innerHTML = count;
        }
    }

}

fieldGen(5);


