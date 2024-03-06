const minNum=1;
const maxNum=100;


let guessNum= Math.floor(Math.random()*(maxNum-minNum))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){

    guess = window.prompt('Pick a number between 1 and 100');
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("Enter a valid Number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Enter a valid Number"); 
    }else{
        attempts++;
        if(guess<guessNum){
            window.alert("TOO LOW! TRY AGAIN!"); 

        }else if(guess>guessNum){
            window.alert("TOO HIGH! TRY AGAIN!");
    }else{
        window.alert(`COREECT The answer is ${guessNum}. It took you ${attempts} attempts.`);
        running=false;

    }
}

}
