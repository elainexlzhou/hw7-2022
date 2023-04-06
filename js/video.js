const video = document.querySelector('#player1');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const slowerButton = document.querySelector('#slower');
const fasterButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');
const muteButton = document.querySelector('#mute');
const slider = document.querySelector('#slider');
const volume = document.querySelector('#volume');
const vintageButton = document.querySelector('#vintage');
const origButton = document.querySelector('#orig');

const setAutoplay = () => {
    video.autoplay = false;
    console.log(`Autoplay is set to ${video.autoplay}`);
    video.loop = false;
    console.log(`Loop is set to ${video.loop}`);
};

const playVideo = () => {
    console.log('Play Video');
    video.play();
    volume.innerHTML = `${video.volume * 100}%`;
};

const pauseVideo = () => {
    console.log('Pause Video');
    video.pause();
};

const slowDownVideo = () => {
    console.log('Slow Down Video');
    video.playbackRate *= 0.9;
    console.log(`Playback rate is ${video.playbackRate}`);
};

const speedUpVideo = () => {
    console.log('Speed Up Video');
    video.playbackRate /= 0.9;
    console.log(`Playback rate is ${video.playbackRate}`);
};

const skipAhead = () => {
    console.log('Skip ahead');
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log(`Current time is ${video.currentTime}`);
};

const toggleMute = () => {
    console.log('Mute/Unmute Video');
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = 'Mute';
    } else {
        video.muted = true;
        muteButton.innerHTML = 'Unmute';
    }
};

const changeVolume = () => {
    console.log('Changing volume');
    video.volume = slider.value / 100;
    volume.innerHTML = `${video.volume * 100}%`;
};

const addOldSchoolFilter = () => {
    console.log('Add Old School Filter');
    video.classList.add('oldSchool');
};

const removeOldSchoolFilter = () => {
    console.log('Remove Old School Filter');
    video.classList.remove('oldSchool');
};

window.addEventListener('load', setAutoplay);
playButton.addEventListener('click', playVideo);
pauseButton.addEventListener('click', pauseVideo);
slowerButton.addEventListener('click', slowDownVideo);
fasterButton.addEventListener('click', speedUpVideo);
skipButton.addEventListener('click', skipAhead);
muteButton.addEventListener('click', toggleMute);
slider.addEventListener('change', changeVolume);
vintageButton.addEventListener('click', addOldSchoolFilter);
origButton.addEventListener('click', removeOldSchoolFilter);

