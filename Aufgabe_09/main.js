var Aufgabe09;
(function (Aufgabe09) {
    document.querySelector('body').style.background = 'black';
    function playsample(variable1) {
        variable1.play();
    }
    const audio1 = new Audio("assets/DrumPad/A.mp3");
    const audio2 = new Audio("assets/DrumPad/C.mp3");
    const audio3 = new Audio("assets/DrumPad/F.mp3");
    const audio4 = new Audio("assets/DrumPad/G.mp3");
    const audio5 = new Audio("assets/DrumPad/hihat.mp3");
    const audio6 = new Audio("assets/DrumPad/kick.mp3");
    const audio7 = new Audio("assets/DrumPad/laugh-1.mp3");
    const audio8 = new Audio("assets/DrumPad/laugh-2.mp3");
    const audio9 = new Audio("assets/DrumPad/snare.mp3");
    document.querySelector('#button1').addEventListener('click', function () { playsample(audio1); });
    document.querySelector('#button2').addEventListener('click', function () { playsample(audio2); });
    document.querySelector('#button3').addEventListener('click', function () { playsample(audio3); });
    document.querySelector('#button4').addEventListener('click', function () { playsample(audio4); });
    document.querySelector('#button5').addEventListener('click', function () { playsample(audio5); });
    document.querySelector('#button6').addEventListener('click', function () { playsample(audio6); });
    document.querySelector('#button7').addEventListener('click', function () { playsample(audio7); });
    document.querySelector('#button8').addEventListener('click', function () { playsample(audio8); });
    document.querySelector('#button9').addEventListener('click', function () { playsample(audio9); });
    /*B-Teil und Stop Button*/
    let play = document.querySelector('#play');
    let stop = document.querySelector('#stop');
    let myInterval;
    let audios1 = [audio5, audio6, audio9];
    let audios = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];
    let counter = 0;
    document.querySelector("#play").addEventListener('click', function () {
        play.classList.add('hidden');
        stop.classList.remove('hidden');
        myInterval = setInterval(() => {
            playsample(audios1[counter]);
            if (counter == 2) {
                counter = 0;
            }
            else {
                counter++;
            }
        }, 500);
    });
    document.querySelector("#stop").addEventListener('click', function () {
        stop.classList.add('hidden');
        play.classList.remove('hidden');
        clearInterval(myInterval);
    });
    /*Random Generator für das Mikrofon*/
    function mix() {
        audios1 = [];
        while (audios1.length < 3) {
            var r = Math.floor(Math.random() * 9);
            audios1.push(audios[r]);
        }
    }
    document.querySelector("#mix").addEventListener('click', mix);
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=main.js.map