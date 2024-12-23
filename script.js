
let num = 0

document.getElementById("number").textContent = num

document.getElementById("btn").addEventListener("click", function(){
        num += 1
        document.getElementById("number").textContent = num
    })


