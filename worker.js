queue(function () {
    setInterval(performWork, WORKER_POLLING_INTERVAL)
    console.log("loaaaad")
})

function el (item, attrs) {
    const e = document.createElement(item)
    for (var key of Object.keys(attrs)) {
        e.setAttribute(key, attrs[key])
    }
    return e
}


function performWork () {
    console.log("work work")
    const peon = el("img", { "id": `p${counter}`, "src": "peon.jpg", "style": `transform: rotate(${rotation}deg)`})
    const maxPeons = (window.innerWidth / peon.width) * (window.innerHeight / peon.height)
    if (counter + 1 > maxPeons) {
        counter = 0
        peon.id = "p0"
    }
    const currentPeon = document.getElementById(`p${counter}`)
    if (currentPeon) {
        currentPeon.replaceWith(peon)
    } else {
        document.body.appendChild(peon)
    }
    counter++
}

