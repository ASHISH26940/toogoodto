let cursor = document.querySelector(".cursor")
let box = document.querySelectorAll(".box")
let container = document.querySelector(".container")

window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.y + "px"
    cursor.style.left = e.x + "px"
    // console.log(e.x,e.y)
})


// box.forEach((box) => {
//     box.addEventListener("mouseenter", function () {
//         cursor.classList.add("show")

//     })
//     box.addEventListener("mouseleave", function () {
//         cursor.classList.remove("show")

//     })

// })


container.addEventListener("mouseenter", function () {
    cursor.classList.add("show")

})
container.addEventListener("mouseleave", function () {
    cursor.classList.remove("show")

})
