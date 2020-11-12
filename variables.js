const WORKER_POLLING_INTERVAL = 50 /* ms */
let counter = 0
let rotation = 0

const queued = []
let loaded = false
function queue (f, args=[]) {
    if (!loaded) queued.push([f, args])
    else f(...args)
}

window.onload = function () {
    for (const pair of queued) {
        pair[0](...pair[1])
    }
    loaded = true
}

function $ (q) {
    return document.querySelector(q)
}
