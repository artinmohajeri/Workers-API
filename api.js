const changeBg = document.querySelector("#btn1")
const sum = document.querySelector("#btn2")
const body = document.querySelector("body")
let counter = 0
let worker = new Worker('worker.js')




changeBg.addEventListener("click", function () {
    if (counter % 2 === 0) {
        body.classList.remove("bg-black");
        body.classList.add("bg-white");
        counter++
    } else {
        body.classList.remove("bg-white");
        body.classList.add("bg-black");
        counter++
    }
})

sum.addEventListener("click", function (event) {
    worker.postMessage("hello worker")
    worker.onmessage = function (message) {
        alert(message.data)
        worker.terminate()
    }
})








// function startWorker() {
//     if (typeof w === "undefined") {
//         worker = new Worker("./worker.js")
//     }
//     worker.onmessage = function (event) {
//         alert(event.date)
//     }
// }

// function stopWorker(){
//     worker.terminate()
// }


