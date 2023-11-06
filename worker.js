onmessage = function(message){
    let result = 0
    for (let i = 1; i <= 2000000000; i++) {
        result += i
    }
    postMessage(result)
}



