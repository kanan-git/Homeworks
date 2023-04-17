// ------------ - - → | ALL VARIABLES
{
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
    var endOfClip = video.duration
    var fullScrnBtn = document.querySelector(".toolbar__expand")
    var fullScrnExpand = document.querySelector(".fa-expand")
    var fullScrnCollapse = document.querySelector(".fa-down-left-and-up-right-to-center")
    var percentOfProgBar = 0
    var touchScrnLayer = document.querySelector(".videoplayer__touchbuttons")
    var backwardTSbtn = document.querySelector(".videoplayer__touchbuttons--backward")
    var forwardTSbtn = document.querySelector(".videoplayer__touchbuttons--forward")
    var pauseTSbtn = document.querySelector(".videoplayer__touchbuttons--pause")
    var playTSbtn = document.querySelector(".videoplayer__touchbuttons--play")
    var isMouseDown = false
    // let, const not working in different cell in {} ???
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | STARTING VALUES
{
    video.volume = volumeSlider.value
    video.playbackRate = 1
    volInpValArr.push(video.volume)
    volInpValArr.push(video.volume)
    progressionPos.style.width = `${percentOfProgBar}%`
    progressionDot.style.left = `${percentOfProgBar}%`
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
            // console.log("VIDEO CLIP ENDED NOW")
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | VIDEO PLAYBACK SPEED
{
    playbackSpeed.addEventListener("change", () => {
        video.playbackRate = playbackSpeed.value
    })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | VIDEO PLAY/PAUSE
{
    function pVp() {
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
    }
    ppBtn.addEventListener("click", pVp)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | MORE BUTTON
{
    moreDots.addEventListener("click", () => {
        moreDropdown.classList.toggle("hidden")
    })
    video.addEventListener("mouseout", () => {
        moreDropdown.classList.add("hidden")
    })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | SKIP BUTTONS
{
    skip.forEach(btn => {
        btn.addEventListener("click", () => {
            // console.log(Number(btn.dataset.skip))
            video.currentTime += Number(btn.dataset.skip)
        })
    })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | TOUCHSREEN EFFECTS & BUTTONS
{
    // PLAY AND PAUSE BUTTONS ON CLICK
    function TSpVp() {
        if (video.paused == true) {
            video.play()
            btnIconPAUSE.classList.remove("hidden")
            btnIconPLAY.classList.add("hidden")
            btnIconRESTART.classList.add("hidden")
            touchScrnLayer.classList.remove("hidden")
            playTSbtn.classList.remove("hidden")
            setTimeout(() => {
                touchScrnLayer.classList.add("hidden")
                playTSbtn.classList.add("hidden")
            }, 50)
        } else {
            video.pause()
            btnIconPAUSE.classList.add("hidden")
            btnIconPLAY.classList.remove("hidden")
            btnIconRESTART.classList.add("hidden")
            touchScrnLayer.classList.remove("hidden")
            pauseTSbtn.classList.remove("hidden")
            setTimeout(() => {
                touchScrnLayer.classList.add("hidden")
                pauseTSbtn.classList.add("hidden")
            }, 50)
        }
        if (video.currentTime == endOfClip) {
            currentTime = 0
            video.play()
        }
    }
    video.addEventListener("click", TSpVp)
    // SKIP FORWARD & BACKWARD ON DOUBLE CLICK SIDES
    function TSfwNbw() {}
    video.addEventListener("dblclick", () => {
        console.log("TEST 123")
    })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | FULLSCREEN BUTTON
{
    fullScrnBtn.addEventListener("click", () => {
        video.requestFullscreen()
        // fullScrnExpand.classList.toggle("hidden")
        // fullScrnCollapse.classList.toggle("hidden")
        if (video.requestFullscreen) {
            console.log("fullscreen mode")
        } else {
            console.log("window mode")
        }
    })
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ------------ - - → | SLIDEABLE PROGRESS BAR
{
    // FUNCTION FOR PROGRESS BAR
    function changeStatus(propsArg) {
        isMouseDown = propsArg
    }
    function scrub(e) {
        let clickedTime = (e.offsetX/progressBar.offsetWidth) * video.duration
        video.currentTime = clickedTime
    }
    // ACTIONS FOR PROGRESS BAR
    progressBar.addEventListener("mousedown", () => changeStatus(true))
    progressBar.addEventListener("mouseup", () => changeStatus(false))
    progressBar.addEventListener("mousemove", (e) => isMouseDown && scrub(e))
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~