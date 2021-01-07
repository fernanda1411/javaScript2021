const taskEl = document.getElementById('task-3');

function alertMessage(){
    alert('This is the alert message!');
}

function myName(name){
    alert('Hi ' + name);
}

// alertMessage();

function combine(str1, str2, str3){
    const combineText = `${str1} ${str2} ${str3}`;
    return combineText;
}

myName('Fernanda');

taskEl.addEventListener('click', alertMessage);

const combinedString = combine('Hi', 'there', '!');
alert(combinedString);