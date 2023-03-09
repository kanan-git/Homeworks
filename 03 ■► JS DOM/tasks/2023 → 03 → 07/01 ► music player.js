// dragable progressbar feature add
// volume slider add
// dynamic img, dynamic txt fetch data from folder into array

var audio = document.querySelector("audio")
var body = document.querySelector("#background")
var musicplayer = document.querySelector(".musicplayer")
var musicTitle = document.querySelector(".musicplayer__title")
var img = document.querySelector("img")
var cover = document.querySelector(".musicplayer__disc")
var prevBtn = document.querySelector(".musicplayer__toolbar--prevsong")
var playBtn = document.querySelector(".musicplayer__toolbar--playpause")
var nextBtn = document.querySelector(".musicplayer__toolbar--nextsong")
var progress = document.querySelector(".musicplayer__progressbar--passed")
var bar = document.querySelector(".musicplayer__progressbar")
var clipNow = document.querySelector(".musicplayer__timer--current")
var clipMax = document.querySelector(".musicplayer__timer--duration")

const songs = [
    "clubbed to death - Matrix soundtrack",
    "Fantom ‘87 - Pay Phone",
    "FIDLAR - Cocaine",
    "Kavinsky - Nightcall (Drive Original Movie Soundtrack) (Official Audio)"
]

let songIndex = 1
let playerStatus = false
playBtn.textContent = "⏵"
progress.style.width = `0%`

loadSong(songs[songIndex])

function loadSong(songName) {
    musicTitle.innerHTML = songName
    audio.src = `assets/mp3/${songName}.mp3`
    img.src = `assets/jpg/${songName}.jpg`
}
function play() {
    cover.classList.add("play")
    playBtn.textContent = "⏸"
    audio.play()
    playerStatus = true
}
function pause() {
    cover.classList.remove("play")
    playBtn.textContent = "⏵"
    audio.pause()
    playerStatus = false
}
function prevSong() {
    songIndex--
    songIndex < 0 && (songIndex = songs.length - 1)
    loadSong(songs[songIndex])
    play()
}
function nextSong() {
    songIndex++
    songIndex > songs.length - 1 && (songIndex = 0)
    loadSong(songs[songIndex])
    play()
}


document.addEventListener("mousemove", (e) => {
    var bgPointX
    var bgPointY
    bgPointX = e.offsetX/body.offsetWidth
    bgPointY = e.offsetY/body.offsetHeight
    bgPointX *= 100
    bgPointY *= 100
    body.style.background = `radial-gradient(circle at ${bgPointX}% ${bgPointY}%, rgb(255,255,0),rgb(255,128,0))`
})

playBtn.addEventListener("click", () => {
    if (playerStatus == false) {
        play()
        // console.log("SONG IS PLAYING NOW")
    } else {
        pause()
        // console.log("SONG IS PAUSED")
    }
})
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

audio.addEventListener("timeupdate", () => {
    var x = audio.currentTime / audio.duration
    x *= 100
    // console.log(Math.round(x))
    // progress.style.width = `${Math.round(x)}%`
    // console.log(x)
    progress.style.width = `${x}%`
    // Math.round(audio.currentTime) + 
    var currentTimeinMinutes = Math.trunc(audio.currentTime/60) + ":" + Math.round(audio.currentTime%60)
    if (currentTimeinMinutes.length < 4) {
        currentTimeinMinutes = Math.trunc(audio.currentTime/60) + ":" + "0" + Math.round(audio.currentTime%60)
    }

    var durationInMinutes = Math.trunc(audio.duration/60) + ":" + Math.round(audio.duration%60)
    if (durationInMinutes.length < 4) {
        durationInMinutes = Math.trunc(audio.duration/60) + ":" + "0" + Math.round(audio.duration%60)
    }

    clipNow.textContent = currentTimeinMinutes + " /"
    clipMax.textContent = "/ " + durationInMinutes
})

bar.addEventListener("click", (e) => {
    var progStat = (e.offsetX / bar.offsetWidth) * 100
    var musicStat = (e.offsetX / bar.offsetWidth) * audio.duration
    progress.style.width = `${progStat}%`
    // console.log("loading", progStat)
    // console.log("bar currentPos", e.offsetX)
    // console.log("bar width", bar.offsetWidth)
    audio.currentTime = musicStat
})
// bar.addEventListener("mousemove", (e) => {
//     var progStat = (e.offsetX / bar.offsetWidth) * 100
//     var musicStat = (e.offsetX / bar.offsetWidth) * audio.duration
//     progress.style.width = `${progStat}%`
//     console.log("loading", progStat)
//     // console.log("bar currentPos", e.offsetX)
//     // console.log("bar width", bar.offsetWidth)
//     audio.currentTime = musicStat
// })





// ==================================================
// CHECK LATER (ChatGPT)
// Sure, I can explain the steps to create an audio waveform effect without writing any code.
// Import your audio file: The first step is to import the audio file you want to create a waveform effect for into your chosen audio editing software. Make sure the audio file is of good quality and has a clear sound.
// Analyze the audio file: Use the software's audio analysis tools to analyze the audio file and identify the key frequencies, pitch changes, and other audio characteristics that will help you create the waveform effect.
// Create a new layer: Create a new layer on top of the audio file layer, and make sure it is the same length as the audio file.
// Draw the waveform: Using your software's drawing tools, draw a waveform on the new layer. This waveform should match the audio file's sound and timing.
// Apply effects: Once you have drawn the waveform, you can apply various effects to it to give it a more realistic look. For example, you can add a gradient fill, drop shadow, or other visual effects to make the waveform stand out.
// Adjust the waveform: Adjust the waveform as needed to ensure it matches the audio file's sound and timing. You may need to make minor tweaks to the waveform to get it just right.
// Export the waveform: Finally, export the waveform as a separate file so that you can use it in your project. You can also add the waveform to your original audio file to create a more dynamic and engaging effect.