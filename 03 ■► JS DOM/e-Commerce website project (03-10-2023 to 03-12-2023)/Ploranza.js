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
// navbar menu slots
const woman = document.querySelector(".nav__woman")
const man = document.querySelector(".nav__man")
const kid = document.querySelector(".nav__kid")
const accessories = document.querySelector(".nav__accessories")
const electronics = document.querySelector(".nav__electronics")
const sport = document.querySelector(".nav__sport")
const furniture = document.querySelector(".nav__furniture")
const software = document.querySelector(".nav__software")
// privacy and terms buttons
const privbutton = document.querySelector(".privbutton")
const privbuttonCross = document.querySelector(".privacypolicy__cross")
const termsbutton = document.querySelector(".termsbutton")
const termsbuttonCross = document.querySelector(".termsofuse__cross")
// navbar dropdowns
const navDropdowns = document.querySelectorAll(".nav__dropdown")
// unavailable functions list
const unSerLivC = document.querySelector(".livechat")
const unSerRetP = document.querySelector(".returnpolicy")
const unSerCar = document.querySelector(".career")
const unSerCnt = document.querySelector(".contact")
const unSerSell = document.querySelector(".sellinpol")
const unSerTuse = document.querySelector(".tuse")
// breadcrumb algoritm variable
const breadcrumb = document.querySelector(".breadcrumb")
// .

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
        document.documentElement.style.setProperty("--bodyCLR", "linear-gradient(to right, rgb(255,16,128), rgb(255,128,16))")
        document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,255,255), rgb(0,255,128))")
        document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(80,140,170), rgb(190,210,190), rgb(80,140,170))")
        document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,255,0), rgb(255,128,0))")
        document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,255,255), rgb(0,128,255))")
        document.documentElement.style.setProperty("--otherPagesBG", "linear-gradient(to top, rgb(0,32,255), rgb(0,128,0), rgb(0,32,255))")
        localStorage.setItem("visualMode", "lightmode")
    } else {
        // setup for dark mode
        switchLDmodes.classList.add("checked")
        faSun.style.scale = `1.0`
        faMoon.style.scale = `1.5`
        document.documentElement.style.setProperty("--defaultColor", "rgb(255,255,255)")
        document.documentElement.style.setProperty("--hoverColor", "rgb(0,255,128)")
        document.documentElement.style.setProperty("--activeColor", "rgb(255,128,0)")
        document.documentElement.style.setProperty("--bgColor", "rgb(32,32,32)")
        document.documentElement.style.setProperty("--bodyCLR", "rgb(16,16,16)")
        document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,0,255), rgb(0,128,255))")
        document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(150,100,190), rgb(80,120,160), rgb(150,100,190))")
        document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,0,128), rgb(255,0,0))")
        document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,128,0), rgb(0,0,255))")
        document.documentElement.style.setProperty("--otherPagesBG", "linear-gradient(to top, rgb(48,48,48), rgb(96,96,96), rgb(48,48,48))")
        localStorage.setItem("visualMode", "darkmode")
    }
}
isSwitched() // first call makes dark mode
isSwitched() // second call for fix start up dark mode issue
switchLDmodes.addEventListener("click", isSwitched)
// •| #(LIGHT/DARK MODE VALUES) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(USERPANEL DROPDOWN) start |•
function toggleUserDropdown() {
    if (userDropdown.classList.contains("invisible")) {
        userDropdown.classList.remove("invisible")
        userOverlay.classList.remove("invisible")
        
    } else {
        userDropdown.classList.add("invisible")
        userOverlay.classList.add("invisible")
    }
}
function hideUDDonScroll() {
    if (userDropdown.classList.contains("invisible")) {} else {
        userDropdown.classList.add("invisible")
        userOverlay.classList.add("invisible")
    }
}
userPanel.addEventListener("click", toggleUserDropdown)
userOverlay.addEventListener("click", toggleUserDropdown)
window.addEventListener("scroll", hideUDDonScroll)
window.addEventListener("scroll", hideUDDonScroll)
// •| #(USERPANEL DROPDOWN) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(OPEN NAVBAR DROPDOWN MENUS) start |•
{
    // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[0].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[0].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[0].classList.remove("hidden")
    //     }, 100)
    // }
    // woman.addEventListener("mouseenter", OnavDropMenu)
    // woman.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[0].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[0].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[1].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[1].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[1].classList.remove("hidden")
    //     }, 100)
    // }
    // man.addEventListener("mouseenter", OnavDropMenu)
    // man.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[1].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[1].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[2].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[2].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[2].classList.remove("hidden")
    //     }, 100)
    // }
    // kid.addEventListener("mouseenter", OnavDropMenu)
    // kid.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[2].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[2].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[3].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[3].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[3].classList.remove("hidden")
    //     }, 100)
    // }
    // accessories.addEventListener("mouseenter", OnavDropMenu)
    // accessories.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[3].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[3].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[4].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[4].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[4].classList.remove("hidden")
    //     }, 100)
    // }
    // electronics.addEventListener("mouseenter", OnavDropMenu)
    // electronics.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[4].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[4].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[5].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[5].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[5].classList.remove("hidden")
    //     }, 100)
    // }
    // sport.addEventListener("mouseenter", OnavDropMenu)
    // sport.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[5].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[5].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[6].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[6].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[6].classList.remove("hidden")
    //     }, 100)
    // }
    // furniture.addEventListener("mouseenter", OnavDropMenu)
    // furniture.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[6].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[6].addEventListener("mouseout", CnavDropMenu)
    // // -----------------------------------------------
    // function OnavDropMenu() {
    //     setTimeout (() => {
    //         for (let i=0; i<navDropdowns.length; i++) {
    //             navDropdowns[i].classList.add("hidden")
    //         }
    //         navDropdowns[7].classList.remove("hidden")
    //     }, 100)
    // }
    // function CnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[7].classList.add("hidden")
    //     }, 100)
    // }
    // function EnavDropMenu() {
    //     setTimeout(() => {
    //         navDropdowns[7].classList.remove("hidden")
    //     }, 100)
    // }
    // software.addEventListener("mouseenter", OnavDropMenu)
    // software.addEventListener("mouseout", CnavDropMenu)
    // navDropdowns[7].addEventListener("mouseenter", EnavDropMenu)
    // navDropdowns[7].addEventListener("mouseout", CnavDropMenu)
}
// •| #(OPEN NAVBAR DROPDOWN MENUS) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(UNAVAILABLE FUNCTIONS /!\ MESSAGE) start |•
async function alertComingSoon() {
    comingsoon.classList.remove("hidden")
    overlayBolder.classList.remove("hidden")
    await new Promise(resolve => setTimeout(resolve, 1500));
    comingsoon.classList.add("hidden")
    overlayBolder.classList.add("hidden")
    loading.classList.remove("hidden")
    setTimeout(() => {
        loading.classList.add("hidden")
    }, 800)
}
unSerLivC.addEventListener("click", alertComingSoon)
unSerRetP.addEventListener("click", alertComingSoon)
unSerCar.addEventListener("click", alertComingSoon)
unSerCnt.addEventListener("click", alertComingSoon)
unSerSell.addEventListener("click", alertComingSoon)
unSerTuse.addEventListener("click", alertComingSoon)
// •| #(UNAVAILABLE FUNCTIONS /!\ MESSAGE) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(POP-UP WINDOWS) start |•
privbutton.addEventListener("click", () => {
    privacypolicy.classList.remove("invisible-v2")
    overlayBlurbg.classList.remove("hidden")
})
overlayBlurbg.addEventListener("click", () => {
    privacypolicy.classList.add("invisible-v2")
    overlayBlurbg.classList.add("hidden")
})
termsbutton.addEventListener("click", () => {
    termsofuse.classList.remove("invisible-v2")
    overlayBlurbg.classList.remove("hidden")
})
overlayBlurbg.addEventListener("click", () => {
    termsofuse.classList.add("invisible-v2")
    overlayBlurbg.classList.add("hidden")
})
privbuttonCross.addEventListener("click", () => {
    privacypolicy.classList.add("invisible-v2")
    overlayBlurbg.classList.add("hidden")
})
termsbuttonCross.addEventListener("click", () => {
    termsofuse.classList.add("invisible-v2")
    overlayBlurbg.classList.add("hidden")
})
// •| #(POP-UP WINDOWS) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(BREADCRUMB ALGORITHYM) start |•
// function breadcrumbLinks() {
//     let a = "Test 123"
//     breadcrumb.innerHTML = `
//     <a href="#">Homepage</a>
//     `
// }
// •| #(BREADCRUMB ALGORITHYM) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(SIGN IN FORM) start |•
// signed.classList.add("hidden")
// signed.classList.remove("hidden")
// •| #(SIGN IN FORM) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(REGISTER FORM) start |•
// registered.classList.add("hidden")
// registered.classList.remove("hidden")
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