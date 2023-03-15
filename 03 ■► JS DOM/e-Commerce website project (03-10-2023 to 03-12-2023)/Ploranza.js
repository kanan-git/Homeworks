// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(VARIABLE HTML/BODY) start |•
// body
const body = document.body
// user panel
const switchLDmodes = document.querySelector(".switch")
const faSun = document.querySelector(".fa-sun")
const faMoon = document.querySelector(".fa-moon")
const userPanel = document.querySelector(".header__userpanel")
const userDropdown = document.querySelector(".header__userpanel--dropdown")
const userOverlay = document.querySelector(".overlay-iv")
// popup windows
const signed = document.querySelector(".signed")
const registered = document.querySelector(".registered")
const privacypolicy = document.querySelector(".privacypolicy")
const termsofuse = document.querySelector(".termsofuse")
const overlayBolder = document.querySelector(".overlay-bolder")
const overlayBlurbg = document.querySelector(".overlay-blurbg")
const comingsoon = document.querySelector(".comingsoon")
const loading = document.querySelector(".loading")
// ...

// •| #(VARIABLE HTML/BODY) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(LIGHT/DARK MODE VALUES) start |•
function isSwitched() {
    if (switchLDmodes.classList.contains("checked")) {
        // setup for light mode
        switchLDmodes.classList.remove("checked")
        faSun.style.scale = `1.5`
        faMoon.style.scale = `1.0`
        document.documentElement.style.setProperty("--defaultColor", "rgb(0,0,0)")
        document.documentElement.style.setProperty("--hoverColor", "rgb(0,128,255)")
        document.documentElement.style.setProperty("--activeColor", "rgb(128,0,255)")
        document.documentElement.style.setProperty("--bgColor", "rgb(255,255,255)")
        document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,255,255), rgb(0,255,128))")
        document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(80,140,170), rgb(190,210,190), rgb(80,140,170))")
        document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,255,0), rgb(255,128,0))")
        document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,255,255), rgb(0,128,255))")
    } else {
        // setup for dark mode
        switchLDmodes.classList.add("checked")
        faSun.style.scale = `1.0`
        faMoon.style.scale = `1.5`
        document.documentElement.style.setProperty("--defaultColor", "rgb(255,255,255)")
        document.documentElement.style.setProperty("--hoverColor", "rgb(0,255,128)")
        document.documentElement.style.setProperty("--activeColor", "rgb(255,128,0)")
        document.documentElement.style.setProperty("--bgColor", "rgb(32,32,32)")
        document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,0,255), rgb(0,128,255))")
        document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(150,100,190), rgb(80,120,160), rgb(150,100,190))")
        document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,0,128), rgb(255,0,0))")
        document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,128,0), rgb(0,0,255))")
    }
}
isSwitched() // first call makes dark mode
isSwitched() // second call for fix start up dark mode issue
switchLDmodes.addEventListener("click", isSwitched)
// •| #(LIGHT/DARK MODE VALUES) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(USERPANEL DROPDOWN) start |•
function toggleUserDropdown() {
    if (userDropdown.classList.contains("hidden")) {
        userDropdown.classList.remove("hidden")
        userOverlay.classList.remove("hidden")
        
    } else {
        userDropdown.classList.add("hidden")
        userOverlay.classList.add("hidden")
    }
}
function hideUDDonScroll() {
    if (userDropdown.classList.contains("hidden")) {} else {
        userDropdown.classList.add("hidden")
        userOverlay.classList.add("hidden")
    }
}
userPanel.addEventListener("click", toggleUserDropdown)
userOverlay.addEventListener("click", toggleUserDropdown)
window.addEventListener("scroll", hideUDDonScroll)
window.addEventListener("scroll", hideUDDonScroll)
// •| #(USERPANEL DROPDOWN) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// temporary part for popup windows • start

// signed.classList.add("hidden")
// registered.classList.add("hidden")
// privacypolicy.classList.add("hidden")
// termsofuse.classList.add("hidden")
// overlayBolder.classList.add("hidden")
// overlayBlurbg.classList.add("hidden")
// comingsoon.classList.add("hidden")
// loading.classList.add("hidden")

// signed.classList.remove("hidden")
// registered.classList.remove("hidden")
// privacypolicy.classList.remove("hidden")
// termsofuse.classList.remove("hidden")
// overlayBolder.classList.remove("hidden")
// overlayBlurbg.classList.remove("hidden")
// comingsoon.classList.remove("hidden")
// loading.classList.remove("hidden")

// temporary part for popup windows • end
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(SIGN IN FORM) start |•
{}
// •| #(SIGN IN FORM) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(REGISTER FORM) start |•
{}
// •| #(REGISTER FORM) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(HEADER) start |•
{}
// •| #(HEADER) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(USER PANEL) start |•
{}
// •| #(USER PANEL) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(NAVIGATION BAR) start |•
{}
// •| #(NAVIGATION BAR) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►