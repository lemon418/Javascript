let canvas = document
    .getElementsByTagName("canvas")[0];

let show = document.createElement('div');
document.body.append(show);

canvas.width = 800;
canvas.height = 600;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "#99ccff";
ctx.fillRect(0, 0, 800, 600);

let tiger = {
    img: 'tiger.png',
    x: 22,
    y: 15,
    width: 128,
    height: 128
};

function drawImg(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        ctx.drawImage(
            img,
            obj.x, obj.y,
            obj.width, obj.height
        );
    }
}

drawImg(tiger);

let score = 0;
show.innerHTML = score;    

function move(obj, event) {
    // w - перемещение вверх
    // a - перемещение влево
    // d - перемещение вправо
    // s - перемещение вниз
    console.log(event.code);
    if (event.code === "KeyD") {
        clearImg(obj);
        obj.x += 3;

        if ((obj.x + obj.width >= rabbit.x) && (obj.x <= rabbit.x + rabbit.width)
            && (obj.y  >= rabbit.y - rabbit.height) 
            && (obj.y  <= rabbit.y + rabbit.height)) {
            ctx.fillRect(0, 0, 800, 600);
            score++;
            show.innerHTML = score;  
            console.log(score);
            drawRabbit(rabbit);
        }

        drawImg(obj);
    } else if (event.code === "KeyA") {
        clearImg(obj);
        obj.x -= 3;

        if ((obj.x <= rabbit.x + rabbit.width) && (obj.x + obj.width >= rabbit.x)
            && (obj.y  >= rabbit.y - rabbit.height) 
            && (obj.y  <= rabbit.y + rabbit.height)) {
            ctx.fillRect(0, 0, 800, 600);
            score++;
            show.innerHTML = score;  
            console.log(score);
            drawRabbit(rabbit);
        }  
        drawImg(obj);
    } else if (event.code === "KeyW") {
        clearImg(obj);
        obj.y -= 3;
        if ((obj.y + obj.height >= rabbit.y) && (obj.y <= rabbit.y + rabbit.height)
            && (obj.x + obj.width >= rabbit.x) 
            && (obj.x <= rabbit.x + rabbit.width)
            ) 
        {
            ctx.fillRect(0, 0, 800, 600);
            score++;
            show.innerHTML = score;  
            console.log(score);
            drawRabbit(rabbit);
        }

  
        drawImg(obj);
    } else if (event.code === "KeyS") {
        clearImg(obj);
        obj.y += 3;
        if ((obj.y + obj.height >= rabbit.y) && (obj.y <= rabbit.y + rabbit.height)
            && (obj.x + obj.width >= rabbit.x) 
            && (obj.x <= rabbit.x + rabbit.width)
            ) 
            {
            ctx.fillRect(0, 0, 800, 600);
            score++;
            console.log(score);
            show.innerHTML = score;
            drawRabbit(rabbit);
        }    
        drawImg(obj);
    }
}

function clearImg(obj) {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

document.addEventListener("keydown",
    move.bind(document, tiger));


// Задача №1


class Rabbit {
    constructor(x, y) {
    this.img = 'rabbit.png';
    this.x = null;
    this.y = null;
    this.width = 128;
    this.height =  128;  
    }
}

let rabbit = {
    img: 'rabbit.png',
    x: null,
    y: null,
    width: 128,
    height: 128
};



function drawRabbit(obj) {
    let img = new Image();
    img.src = 'img/' + obj.img;
    img.onload = () => {
        ctx.drawImage(
            img,
            obj.x = Math.floor((Math.random() * 672) +1),
            obj.y = Math.floor((Math.random() * 472) +1),
            obj.width, obj.height
        );

    }
}

drawRabbit(rabbit);

console.log(score);


// Задача №2








