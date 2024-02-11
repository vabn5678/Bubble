

var timer = 60;

var score = 0;

var hitrn = 0;

function makebubble() {

    var bubbles = "";
    for (var i = 1; i <= 85; i++) {
        var random_number = Math.floor(Math.random() * 10);
        bubbles += ` <div class="bubble">${random_number}</div>`;
    }

    document.querySelector("#pannel-bottom").innerHTML = bubbles;

}


function settimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }

        else {
            clearInterval(timerint);
            document.querySelector("#pannel-bottom").innerHTML = `<h1>GAME OVER</h1>`;
        }

    },
        1000);

}




function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;

}



function increasescore() {

    score += 10;
    document.querySelector("#scoreval").textContent = score;

}



document.querySelector("#pannel-bottom").addEventListener("click", function (details) {

    var clickednum = Number(details.target.textContent);

    if (clickednum === hitrn) {
        increasescore();
        makebubble();
        getnewhit();

    }
});


settimer();
makebubble();
getnewhit();

