let canvas = document
    .getElementsByTagName("canvas")[0];

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

function move(obj, event) {
    // w - перемещение вверх
    // a - перемещение влево
    // d - перемещение вправо
    // s - перемещение вниз
    console.log(event.code);
    if (event.code === "KeyD") {
        console.log("перемещение вправо");
        console.log(obj.x + ' ' +rabbit.x);
        console.log(obj.y + ' ' +rabbit.y);
        clearImg(obj);
        obj.x += 3;

        if ((obj.x + obj.width >= rabbit.x) && (obj.x <= rabbit.x + rabbit.width)
            && (obj.y  >= rabbit.y - rabbit.height) 
            && (obj.y  <= rabbit.y + rabbit.height)) {
            ctx.fillRect(0, 0, 800, 600);
        }

        drawImg(obj);
    } else if (event.code === "KeyA") {
        console.log("перемещение влево");
        clearImg(obj);
        obj.x -= 3;

        if ((obj.x <= rabbit.x + rabbit.width) && (obj.x + obj.width >= rabbit.x)
            && (obj.y  >= rabbit.y - rabbit.height) 
            && (obj.y  <= rabbit.y + rabbit.height)) {
            ctx.fillRect(0, 0, 800, 600);
        }  
        drawImg(obj);
    } else if (event.code === "KeyW") {
        console.log("перемещение вверх");
        clearImg(obj);
        obj.y -= 3;
        if ((obj.y + obj.height >= rabbit.y) && (obj.y <= rabbit.y + rabbit.height)
            && (obj.x + obj.width >= rabbit.x) 
            && (obj.x <= rabbit.x + rabbit.width)
            ) 
        {
            ctx.fillRect(0, 0, 800, 600);
        }

  
        drawImg(obj);
    } else if (event.code === "KeyS") {
        console.log("перемещение вниз");
        clearImg(obj);
        obj.y += 3;
        if ((obj.y + obj.height >= rabbit.y) && (obj.y <= rabbit.y + rabbit.height)
            && (obj.x + obj.width >= rabbit.x) 
            && (obj.x <= rabbit.x + rabbit.width)
            ) 
            {
            ctx.fillRect(0, 0, 800, 600);
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
drawRabbit(rabbit);




// Задача №2








