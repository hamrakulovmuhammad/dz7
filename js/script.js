let d22 = document.querySelector('.d22')
let food = document.querySelector('.food')
let food_pos = food.getBoundingClientRect()
let eyes = document.querySelector('eyes')


setInterval(() => {
    d22.classList.toggle('mouse_open')
}, 300);

let body = window
let x = 100
let y = 100

window.onkeydown = (event) => {
    switch (event.which) {
        case 38:
            y -= 25
            d22.style.rotate = "270deg"
            moveD22()
            break;
        case 40:
            y += 25
            moveD22()
            d22.style.rotate = "90deg"
            break;
        case 37:
            x -= 25
            d22.style.rotate = "180deg"
            moveD22()
            break;
        case 39:
            x += 25
            d22.style.rotate = "0deg"
            moveD22()
            break;
    }
}

function moveD22() {
    d22.style.translate = `${x}px ${y}px`

    let d22_pos = d22.getBoundingClientRect()

    if(d22_pos.x >= food_pos.x -40 && d22_pos.x <= food_pos.x + 40 && d22_pos.y >= food_pos.y - 40 && d22_pos.y <= food_pos.y + 40) {
        food.style.display = "none"
    }
}
let time = 60;
let countDownEl = document.querySelector('#b')

setInterval(updateCountdown, 1000)

function updateCountdown() {
    let minut = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownEl.innerHTML = `${minut}:${seconds}`
    time--;
    if (time ===0) {
        modal_bg_two.style.display = 'block'
    }
}

let modal_bg_two = document.querySelector('.modal_bg_two')
let close_two = document.querySelector('h5')
close_two.onclick = () => {
    modal_bg_two.style.display = 'block'

}



let modal_bg = document.querySelector('.modal_bg')
let close = document.querySelector('h3')
let p = document.querySelector('b')
close.onclick = () => {
    modal_bg.style.display = 'block'
}

let h5 = document.querySelector('h5')
let h3 = document.querySelector('h3')

console.log(h3);
h3.onclick = () => {
    modal_bg.style.display = 'none'
}
h5.onclick = () => {
    modal_bg_two.style.display = 'none'
}
