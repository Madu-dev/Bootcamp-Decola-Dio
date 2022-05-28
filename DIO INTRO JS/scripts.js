var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    if(currentNumber < -1){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }

    if(currentNumber < 1)
    {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = currentNumber;
    }
}

function decrement() {
    if(currentNumber <= 0){
        currentNumberWrapper.style.color = 'red';
    }else{
        currentNumberWrapper.style.color = 'black';
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}