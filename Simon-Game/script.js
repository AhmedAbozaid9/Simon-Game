//a function that checks if 2 arrays are equal or not 
function isEqual(arr1,arr2){
    for(let i = 0; i < arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        } else return true;
    }
}
// get the user input
let userInput = [];

// get a random color
function randomColor(){
    let colors = ['green','red','yellow','blue'];
    let randomNumber = Math.round(Math.random()*3);
    return colors[randomNumber];
}
//the pattern of the game
let pattern = [];

//create a pattern
function createPattern(){    
        pattern.push(randomColor());
        
        let i = 0;
        let intervalId = setInterval(function(){
            $("#"+pattern[i]).fadeOut(100).fadeIn(100);
            let sound = new Audio('sounds/' + pattern[i] + ".mp3");
            sound.play();
            if(i === pattern.length - 1){
                clearInterval(intervalId);
            }
            i++;
        },500)
        
}
//start the game
var level = 0;
//press anywhere to start
$(document).keydown(app);
$('body').click(app);
//just a variable to make sure that the game starts only once
let check = true;

//the actual game
function app(e){
    if(e.target === e.currentTarget && check){
        check = false;
        $('h1').html("level 1");
    createPattern();
        $('.btn').click(function(){
            //effect
            $(this).fadeOut(100).fadeIn(100);
            let thePickedColor = $(this).attr('id');
            //play Sound
            let sound = new Audio('sounds/' + thePickedColor +'.mp3');
            sound.play();
            //save the player choice
            userInput.push(thePickedColor);
            //check if the color is right or not.
        if(userInput.length == pattern.length){
            if(userInput[level] == pattern[level]){
                level++;
                $('h1').html("level " + (level + 1));
                setTimeout(function(){
                    createPattern();
                },500);
                userInput = [];
            }else{
                $('.container').after('<h1>You Lost</h1>')
                $(".container").hide()
                setTimeout(function(){
                    $(document).click(location.reload());
                },1000)
              }
            }
            
        
        })
    
    }
}
