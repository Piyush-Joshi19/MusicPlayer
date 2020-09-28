
for (var i = 0; i <= document.querySelectorAll(".song").length; i++) {
    var demo = document.querySelectorAll(".song")[i].addEventListener("click", playsong);

    var demo = document.querySelectorAll(".song")[i].addEventListener("dblclick", pausesong);
}

function playsong() {
    var songId = this.innerHTML;
    pressedAnimation(songId);
    
 switch (songId) {
    case "a":
        var first = new Audio("music/first.mp3");
        first.play();
        break;
    case "b":
        var second = new Audio("music/second.mp3");
        second.play();
        break;
    case "c":
        var third = new Audio("music/third.mp3");
        third.play();
        break;
    case "d":
        var fourth = new Audio("music/fourth.mp3");
        fourth.play();
        break;
    case "e":
        var five = new Audio("music/fifth.mp3");
        five.play();
        break;
    case "f":
        var six = new Audio("music/six.mp3");
        six.play();
        break;
    case "g":
        var seven = new Audio("music/seven.mp3");
        seven.play();
        break;
    case "h":
        var eight = new Audio("music/eight.mp3");
        eight.play();
        break;
    case "i":
        var nine = new Audio("music/nine.mp3");
        nine.play();
        break;
    default:
        alert("No song in the list");
}

}

function pausesong() {
    var songId = this.innerHTML;
    console.log(songId);
    switch (songId) {
        case "a":
            var first = new Audio("music/first.mp3");
            first.pause();
            break;
        case "b":
            var second = new Audio("music/second.mp3");
            second.pause();
            break;
        case "c":
            var third = new Audio("music/third.mp3");
            third.pause();
            break;
        case "d":
            var fourth = new Audio("music/fourth.mp3");
            fourth.pause();
            break;
        case "e":
            var five = new Audio("music/fifth.mp3");
            five.pause();
            break;
        case "f":
            var six = new Audio("music/six.mp3");
            six.pause();
            break;
        case "g":
            var seven = new Audio("music/seven.mp3");
            seven.pause();
            break;
        case "h":
            var eight = new Audio("music/eight.mp3");
            eight.pause();
            break;
        case "i":
            var nine = new Audio("music/nine.mp3");
            nine.pause();
            break;
        default:
            alert("No song in the list");
    }
    
}

function pressedAnimation(currentKey) {
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");

    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);
}






    





    

