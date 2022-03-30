const deg = 6;
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()

    hr.style.transform = `rotateZ(${(h * 30) + (m / 12)}deg)`
    min.style.transform = `rotateZ(${(m * deg)}deg)`
    sec.style.transform = `rotateZ(${(s * deg)}deg)`


},500)