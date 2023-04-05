const pinInput = document.getElementById('pin');

function getPin(){
    const random = Math.random()*10000;
    const pin = (random+" ").split('.')[0];
    
    if(pin.length==4)
    {
        return pin;
    }
    else
    {
        return getPin();
    }

}

// display generated pin

function generatePin()
{
    pinInput.value = getPin();
}

// handle calculator button event

const btnContainer = document.getElementById('calcBtn');
const typedPin = document.getElementById('typedPin');

const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');

const trial = document.getElementById('trial');

btnContainer.addEventListener('click', function(event){
    var digit = event.target.innerText;

    if(isNaN(digit))
    {
        if(digit==='<')
        {
            typedPin.value = typedPin.value.slice(0,-1);
        }

        if(digit === 'C')
        {
            typedPin.value ='';
            correct.style.display = 'none';
            incorrect.style.display = 'none';
        }
    }
    else
    {
        typedPin.value = typedPin.value + digit; 
    }
    
})

// verify pin

function checkPin()
{
    const pin = pinInput.value;
    const typed = typedPin.value;
    
    if(pin === typed)
    {
        incorrect.style.display = 'none';
        correct.style.display = 'block';
    }
    else
    {
        const trialInt = parseInt(trial.innerText);
        trialValue = trialInt - 1;
        trial.innerText = trialValue;

        incorrect.style.display = 'block';
        correct.style.display = 'none';
    }
}