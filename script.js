const pinInput = document.getElementById('pin');


const btnContainer = document.getElementById('calcBtn');
const typedPin = document.getElementById('typedPin');

const correct = document.getElementById('correct');
const incorrect = document.getElementById('incorrect');

const trial = document.getElementById('trial');

const submitBtn =  document.getElementById('submitBtn');


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

function displayInfo(msg1, msg2){

    correct.style.display = msg1;
    incorrect.style.display = msg2;
    
}

// display generated pin

function generatePin()
{
    pinInput.value = getPin();

    trial.innerText = '3';

    typedPin.value = '';
    
    displayInfo('none', 'none');

    submitBtn.disabled = false;
}

// handle calculator button event


btnContainer.addEventListener('click', function(event){
    var digit = event.target.innerText;

    if(isNaN(digit))
    {
        if(digit==='<')
        {
            typedPin.value = typedPin.value.slice(0,-1);
            displayInfo('none', 'none');
        }

        if(digit === 'C')
        {
            typedPin.value ='';
            displayInfo('none', 'none');
        }
    }
    else
    {
        if(typedPin.value.length < 4)
        {
            typedPin.value = typedPin.value + digit; 
            displayInfo('none', 'none');
        }
    }

    
})

// verify pin

function checkPin()
{
    const pin = pinInput.value;
    const typed = typedPin.value;
    
    if(pin === typed)
    {
        displayInfo('block', 'none');
    }
    else
    {
        const trialInt = parseInt(trial.innerText);

        if(trialInt <= 1){
            trial.innerText = '0';
           submitBtn.disabled = true;

           pinInput.value = '';
           typedPin.value = '';

          displayInfo('none', 'none');
        }
        else
        {
            trialValue = trialInt - 1;
            trial.innerText = trialValue;

            displayInfo('none', 'block');
        }

        
        
    }
}