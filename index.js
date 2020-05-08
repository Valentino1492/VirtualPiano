    document.addEventListener("keypress", function(){
        console.log(event);
        pressedWhiteKey(event.key);
        pressedBlackKey(event.key);
    });


function pressedWhiteKey(key) {
    switch (key) {
        case "a":
            let audio1 = new Audio("white_keys/A.mp3");
            audio1.play();
            console.log("The 'A' key is pressed.");
            break;
        case "s":
            let audio2 = new Audio("white_keys/S.mp3");
            audio2.play();
            console.log("The 'S' key is pressed.");
            break; 
        case "d":
            let audio3 = new Audio("white_keys/D.mp3");
            audio3.play();
            console.log("The 'D' key is pressed.");
            break;   
        case "f":
            let audio4 = new Audio("white_keys/F.mp3");
            audio4.play();
            console.log("The 'F' key is pressed.");
            break;
        case "g":
            let audio5 = new Audio("white_keys/G.mp3");
            audio5.play();
            console.log("The 'G' key is pressed.");
            break;       
        case "h":
            let audio6 = new Audio("white_keys/H.mp3");
            audio6.play();
            console.log("The 'H' key is pressed.");
            break;     
        case "j":
            let audio7 = new Audio("white_keys/J.mp3");
            audio7.play();
            console.log("The 'J' key is pressed.");
            break;    
    
        default:console.log("warning!")
            break;
    }
}

function pressedBlackKey(key) {
    switch (key) {
        case "w":
            let audio8 = new Audio("black_keys/W.mp3");
            audio8.play();
            console.log("The 'W' key is pressed.");
            break;
        case "e":
            let audio9 = new Audio("black_keys/E.mp3");
            audio9.play();
            console.log("The 'E' key is pressed.");
            break; 
        case "t":
            let audio10 = new Audio("black_keys/T.mp3");
            audio10.play();
            console.log("The 'T' key is pressed.");
            break;   
        case "y":
            let audio11 = new Audio("black_keys/Y.mp3");
            audio11.play();
            console.log("The 'Y' key is pressed.");
            break;
        case "u":
            let audio12 = new Audio("black_keys/U.mp3");
            audio12.play();
            console.log("The 'U' key is pressed.");
            break;       
        
    
        default:console.log("warning!")
            break;
    }
}