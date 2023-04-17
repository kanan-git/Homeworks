// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(VARIABLE HTML/BODY) start |•
// body
const body = document.body
// authentication panel
const loginPanelAuth = document.querySelector(".section-auth__container--login")
const regPanelAuth = document.querySelector(".section-auth__container--register")
const loginSwitchBtn = document.querySelector(".section-auth__buttons--login")
const regSwitchBtn = document.querySelector(".section-auth__buttons--register")
const containerAuth = document.querySelector(".section-auth__container")
// signed/registered successfully windows
const signed = document.querySelector(".signed")
const registered = document.querySelector(".registered")
const overlayBolder = document.querySelector(".overlay-bolder")
// form submit buttons
const loginSubmit = document.querySelector(".login--submit")
const registerSubmit = document.querySelector(".register--submit")
// •| #(VARIABLE HTML/BODY) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(AUTHENTICATION PAGE DESIGN) start |•
function switch2Login() {
    containerAuth.style.height = `250px`
    loginPanelAuth.classList.remove("hidden")
    regPanelAuth.classList.add("hidden")
}
function switch2Reg() {
    containerAuth.style.height = `600px`
    loginPanelAuth.classList.add("hidden")
    regPanelAuth.classList.remove("hidden")
}
loginSwitchBtn.addEventListener("click", switch2Login)
regSwitchBtn.addEventListener("click", switch2Reg)
// •| #(AUTHENTICATION PAGE DESIGN) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(CUSTOM VALUES) start |•
document.documentElement.style.setProperty("--defaultColor", "rgb(255,255,255)")
document.documentElement.style.setProperty("--hoverColor", "rgb(0,255,128)")
document.documentElement.style.setProperty("--activeColor", "rgb(255,128,0)")
document.documentElement.style.setProperty("--bgColor", "rgb(32,32,32)")
document.documentElement.style.setProperty("--bodyCLR", "linear-gradient(to right, rgb(0,128,255), rgb(0,0,255), rgb(0,128,255))")
document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,0,255), rgb(0,128,255))")
document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(150,100,190), rgb(80,120,160), rgb(150,100,190))")
document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,0,128), rgb(255,0,0))")
document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,128,0), rgb(0,0,255))")
document.documentElement.style.setProperty("--otherPagesBG", "linear-gradient(to top, rgb(48,48,48), rgb(96,96,96), rgb(48,48,48))")
// •| #(CUSTOM VALUES) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(---) start |•

// •| #(---) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(SIGN IN/UP ALERTS) start |•
// function signedSuccess() {
//     signed.classList.remove("hidden")
//     // overlayBolder.classList.remove("hidden")
//     setTimeout(() => {
//         signed.classList.add("hidden")
//         // overlayBolder.classList.add("hidden")
//     }, 1500)
// }
// function registeredSuccess() {
//     registered.classList.remove("hidden")
//     // overlayBolder.classList.remove("hidden")
//     setTimeout(() => {
//         registered.classList.add("hidden")
//         // overlayBolder.classList.add("hidden")
//     }, 1500)
// }
// loginSubmit.addEventListener("click", signedSuccess)
// registerSubmit.addEventListener("click", registeredSuccess)
// •| #(SIGN IN/UP ALERTS) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►