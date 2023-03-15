// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(VARIABLE HTML/BODY) start |•
const body = document.body
// •| #(VARIABLE HTML/BODY) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(LIGHT/DARK MODE VALUES) start |•
{
    // variables of switch modes
    const switchLDmodes = document.querySelector(".switch")
    const faSun = document.querySelector(".fa-sun")
    const faMoon = document.querySelector(".fa-moon")
    var switching
    // functions
    function isSwitched() {
        if (switchLDmodes.classList.contains("checked")) {
            switchLDmodes.classList.remove("checked")
            faSun.style.scale = `1.5`
            faMoon.style.scale = `1.0`
        } else {
            switchLDmodes.classList.add("checked")
            faSun.style.scale = `1.0`
            faMoon.style.scale = `1.5`
        }
    }
    function swithLightDark() {
        if (isSwitched === true) {
            // light mode setup
            document.documentElement.style.setProperty("--defaultColor", "rgb(0,0,0)")
            document.documentElement.style.setProperty("--hoverColor", "rgb(0,128,255)")
            document.documentElement.style.setProperty("--activeColor", "rgb(128,0,255)")
            document.documentElement.style.setProperty("--bgColor", "rgb(255,255,255)")
            document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,255,255), rgb(0,255,128))")
            document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(170,170,170), rgb(220,220,220), rgb(170,170,170))")
            document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,255,0), rgb(255,128,0))")
            document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,255,255), rgb(0,128,255))")
        } else {
            // dark mode setup
            document.documentElement.style.setProperty("--defaultColor", "rgb(255,255,255)")
            document.documentElement.style.setProperty("--hoverColor", "rgb(0,255,128)")
            document.documentElement.style.setProperty("--activeColor", "rgb(255,128,0)")
            document.documentElement.style.setProperty("--bgColor", "rgb(32,32,32)")
            document.documentElement.style.setProperty("--gradBG", "linear-gradient(to right, rgb(128,0,255), rgb(0,128,255))")
            document.documentElement.style.setProperty("--containerClr", "linear-gradient(to top, rgb(170,170,170), rgb(128,128,128), rgb(170,170,170))")
            document.documentElement.style.setProperty("--containBGv1", "linear-gradient(to right, rgb(255,0,128), rgb(255,0,0))")
            document.documentElement.style.setProperty("--containBGv2", "linear-gradient(to right, rgb(0,128,0), rgb(0,0,255))")
        }
    }
    // actions
    switchLDmodes.addEventListener("click", isSwitched)
    document.addEventListener("mousemove", swithLightDark)
}
// •| #(LIGHT/DARK MODE VALUES) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(USERPANEL DROPDOWN) start |•
{
    // variables for userpanel dropdown menu
    const userPanel = document.querySelector(".header__userpanel")
    const userDropdown = document.querySelector(".header__userpanel--dropdown")
    const userOverlay = document.querySelector(".overlay-iv")
    // functions for userpanel dropdown menu
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
    // action for user dropdown menu
    userPanel.addEventListener("click", toggleUserDropdown)
    userOverlay.addEventListener("click", toggleUserDropdown)
    window.addEventListener("scroll", hideUDDonScroll)
    window.addEventListener("scroll", hideUDDonScroll)
}
// •| #(USERPANEL DROPDOWN) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
// ►►►►►►►►►►| #(.$$$$$$$$$$.) start |•
{}
// •| #(.$$$$$$$$$$.) end |◄◄◄◄◄◄◄◄◄◄
// ◄◄|==========|==========|==========|==========|==========|==========|►►
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