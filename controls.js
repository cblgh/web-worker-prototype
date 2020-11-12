/* CONTROLS
 * sliders:
 *      size (make image smaller / larger, but keep image container the same)
 *      rotation (change image rotation with css)
 * checkboxes:
 *      inverted (or whatever nice css color filter seems fun)
 */

queue(function () {
    $("#rotation").addEventListener("input", rotationSlider)
})

function rotationSlider (e) {
    console.log("rotation slider")
    rotation = parseInt(e.target.value)
}
