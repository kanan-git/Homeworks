// ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬
// VALUES (const, let, var) start
const logo = document.querySelector(".header__logo")
// VALUES (const, let, var) end
// ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬
// FUNCTIONS start
function visionMode(light, dark) {
    light = `invert(0)`
    dark = `invert(1)`
    if (logo.style.filter != dark) {
        logo.style.filter = dark
    } else {
        logo.style.filter = light
    }
}
// FUNCTIONS end
// ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬
// ACTIONS (timers, event listeners) start
logo.addEventListener("click", visionMode)
// ACTIONS (timers, event listeners) end
// ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬ ▬▬▬▬▬▬▬▬▬▬