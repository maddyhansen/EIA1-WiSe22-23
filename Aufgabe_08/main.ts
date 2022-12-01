document.querySelector('body').style.background = 'black'

function playsample(variable1) {
    variable1.play();
    console.log(variable1 )
    }

const audio1: HTMLAudioElement = new Audio("assets/DrumPad/A.mp3")
const audio2 :HTMLAudioElement = new Audio("assets/DrumPad/C.mp3")
const audio3 :HTMLAudioElement = new Audio("assets/DrumPad/F.mp3")
const audio4 :HTMLAudioElement = new Audio("assets/DrumPad/G.mp3")
const audio5 :HTMLAudioElement = new Audio("assets/DrumPad/hihat.mp3")
const audio6 :HTMLAudioElement = new Audio("assets/DrumPad/kick.mp3")
const audio7 :HTMLAudioElement = new Audio("assets/DrumPad/laugh-1.mp3")
const audio8 :HTMLAudioElement = new Audio("assets/DrumPad/laugh-2.mp3")
const audio9 :HTMLAudioElement = new Audio("assets/DrumPad/snare.mp3")

document.querySelector('#button1').addEventListener('click', function() {playsample(audio1); });
document.querySelector('#button2').addEventListener('click', function() {playsample(audio2); });
document.querySelector('#button3').addEventListener('click', function() {playsample(audio3); });
document.querySelector('#button4').addEventListener('click', function() {playsample(audio4); });
document.querySelector('#button5').addEventListener('click', function() {playsample(audio5); });
document.querySelector('#button6').addEventListener('click', function() {playsample(audio6); });
document.querySelector('#button7').addEventListener('click', function() {playsample(audio7); });
document.querySelector('#button8').addEventListener('click', function() {playsample(audio8); });
document.querySelector('#button9').addEventListener('click', function() {playsample(audio9); });



/*B-Teil*/

let audios : HTMLAudioElement [] = [audio5, audio6, audio9];

let counter = 0;
document.querySelector(".play").addEventListener('click', function () {
    setInterval(function () {
        audios[counter].play();
        if (counter==2) {
            counter=0
        } else {counter++} 
    },500);
})

