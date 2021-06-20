const hi = "hello world";
function sayHi(name) {
    console.log(hi);
}

function addClass(el, name) {
    el.classList.add(name);
}

function removeClass(el, name) {
    el.classList.remove(name);
}

function sumAll(arr) {
    return arr.reduce((total, current) => {
        total += current;
    },0)
}

sayHi();
