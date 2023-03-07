// ------------ - - → | ALL VARIABLES
var video = document.querySelector(".videoplayer__content")
var volumeSlider = document.querySelector(".toolbar__volume--slider_input")
var volumeZero = document.querySelector(".fa-volume-xmark")
var volumeLow = document.querySelector(".fa-volume-low")
var volumeHigh = document.querySelector(".fa-volume-high")
var volumeButton = document.querySelector(".toolbar__volume--symbols")
var toolBar = document.querySelector(".toolbar")
var progressBar = document.querySelector(".videoplayer__progressbar")
var progressionPos = document.querySelector(".videoplayer__progressbar--progression")
var progressionDot = document.querySelector(".videoplayer__progressbar--position")
var volInpValArr = []
var prevTime = video.currentTime
// var videoDuration = 155.225397
var playbackSpeed = document.querySelector(".toolbar__speed")
var ppBtn = document.querySelector(".toolbar__pp")
var btnIconPLAY = document.querySelector(".fa-play")
var btnIconPAUSE = document.querySelector(".fa-pause")
var btnIconRESTART = document.querySelector(".fa-retweet")
var skip = document.querySelectorAll("[data-skip]")
var moreDots = document.querySelector(".toolbar__more")
var moreDropdown = document.querySelector(".toolbar__more-dropdown")
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | STARTING VALUES
{
    video.volume = volumeSlider.value
    video.playbackRate = 1
    volInpValArr.push(video.volume)
    volInpValArr.push(video.volume)
    var percentOfProgBar = 0
    progressionPos.style.width = `${percentOfProgBar}%`
    progressionDot.style.left = `${percentOfProgBar}%`
    var endOfClip = video.duration
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | VOLUME PARAMETERS
{
    volumeSlider.addEventListener("input", 
    () => {
        video.volume = volumeSlider.value
        volInpValArr.shift()
        volInpValArr.push(video.volume)
        // console.log(volInpValArr)
        // console.log(video.volume)
        if (video.volume == 0) {
            volumeZero.classList.remove("hidden")
            volumeLow.classList.add("hidden")
            volumeHigh.classList.add("hidden")
        } else if (video.volume < 0.5 && video.volume != 0) {
            volumeZero.classList.add("hidden")
            volumeLow.classList.remove("hidden")
            volumeHigh.classList.add("hidden")
        } else {
            volumeZero.classList.add("hidden")
            volumeLow.classList.add("hidden")
            volumeHigh.classList.remove("hidden")
        }
    }
)
volumeButton.addEventListener("click", 
    () => {
        volInpValArr.shift()
        volInpValArr.push(video.volume)
        if (video.volume > 0) {
            volumeSlider.value = 0
            video.volume = 0
        } else if (volInpValArr[0] == 0) {
            volumeSlider.value = 1
            video.volume = 1
        } else {
            volumeSlider.value = volInpValArr[0]
            video.volume = volInpValArr[0]
        }
        // console.log(volInpValArr)
        // from volumeSlider for changing icons also
        if (video.volume == 0) {
            volumeZero.classList.remove("hidden")
            volumeLow.classList.add("hidden")
            volumeHigh.classList.add("hidden")
        } else if (video.volume < 0.5 && video.volume != 0) {
            volumeZero.classList.add("hidden")
            volumeLow.classList.remove("hidden")
            volumeHigh.classList.add("hidden")
        } else {
            volumeZero.classList.add("hidden")
            volumeLow.classList.add("hidden")
            volumeHigh.classList.remove("hidden")
        }
    }
)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | PROGRESS BAR PARAMETERS
{
    video.addEventListener("timeupdate", () => {
        var percentOfProgBar = (video.currentTime/video.duration)
        percentOfProgBar *= 100
        progressionPos.style.width = `${percentOfProgBar}%`
        progressionDot.style.left = `${percentOfProgBar}%`
        // console.log(percentOfProgBar)
        if (video.currentTime == video.duration) {
            video.pause()
            btnIconPAUSE.classList.add("hidden")
            btnIconPLAY.classList.add("hidden")
            btnIconRESTART.classList.remove("hidden")
            console.log("VIDEO CLIP ENDED NOW")
        }
        // video.ended event listener ...
    })
    toolBar.addEventListener("mouseover", 
    () => {
        progressBar.style.top = `91.5%`
        progressBar.style.transition = `transition: ease-in-out 0.2s`
        progressionDot.style.opacity = `1.0`
        }
    )
    toolBar.addEventListener("mouseout", 
        () => {
            progressBar.style.top = `100%`
            progressBar.style.transition = `transition: ease-in-out 0.2s`
            progressionDot.style.opacity = `0.0`
        }
    )
    video.addEventListener("mouseover", 
    () => {
        progressBar.style.top = `91.5%`
        progressBar.style.transition = `transition: ease-in-out 0.2s`
        progressionDot.style.opacity = `1.0`
        }
    )
    video.addEventListener("mouseout", 
    () => {
        progressBar.style.top = `100%`
        progressBar.style.transition = `transition: ease-in-out 0.2s`
        progressionDot.style.opacity = `0.0`
        }
    )
    progressBar.addEventListener("mouseover", 
    () => {
        progressBar.style.top = `91.5%`
        progressBar.style.transition = `transition: ease-in-out 0.2s`
        progressionDot.style.opacity = `1.0`
        }
    )
    progressBar.addEventListener("mouseout", 
    () => {
        progressBar.style.top = `100%`
        progressBar.style.transition = `transition: ease-in-out 0.2s`
        progressionDot.style.opacity = `0.0`
        }
    )
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | VIDEO PLAYBACK SPEED
playbackSpeed.addEventListener("change", () => {
    video.playbackRate = playbackSpeed.value
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | VIDEO PLAY/PAUSE
ppBtn.addEventListener("click", () => {
    if (video.paused == true) {
        video.play()
        btnIconPAUSE.classList.remove("hidden")
        btnIconPLAY.classList.add("hidden")
        btnIconRESTART.classList.add("hidden")
    } else {
        video.pause()
        btnIconPAUSE.classList.add("hidden")
        btnIconPLAY.classList.remove("hidden")
        btnIconRESTART.classList.add("hidden")
    }
    if (video.currentTime == endOfClip) {
        currentTime = 0
        video.play()
    }
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | MORE BUTTON
moreDots.addEventListener("click", () => {
    moreDropdown.classList.toggle("hidden")
})
video.addEventListener("mouseout", () => {
    moreDropdown.classList.add("hidden")
})
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | SKIP BUTTONS

skip.forEach(btn => {
    btn.addEventListener("click", updateTime)
    console.log(Number(this.dataset.skip))
  })
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~