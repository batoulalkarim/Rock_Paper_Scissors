const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log('Error! Please enter rock, paper, or scissors.');
    }
};
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';        
    }
};