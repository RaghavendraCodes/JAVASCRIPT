// 1. deposit the money.
// 2. determine the number of lines to bet on.
// 3. collect a bet amt.
// 4. spin the slot machine. 
// 5. check if the user won or not. 
// 6. give back the money with profit if won else deduct it. 
// 7. enable to play again untill the deposit is 0. 

/*const prompt = require("prompt-sync")(); 

const ROWS = 3; 
const COLS = 3; 

const SYMBOLS_COUNT = {
    A: 2, 
    B: 4, 
    C: 6, 
    D: 8
};

const SYMBOL_VALUES = {
    A: 5, 
    B: 4, 
    C: 3, 
    D: 2, 
};

const deposit = () => { 
    while(true) {
        const depositAmt = prompt("enter the deposit amount : ");
        const numberDepositAmt = parseFloat(depositAmt);
        if(isNaN(numberDepositAmt) || numberDepositAmt <= 0) {
            console.log("Invalid amount, try again!");
        } else {
        return numberDepositAmt;
        }
    }
}; 

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("enter the number of lines to bet on (1-3) : ");
        const numberOfLines = parseFloat(lines);
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again!");
        } else {
        return numberOfLines;
        }
    }
}

const getBet = (balanceAmt, selectedLines) => {
    while (true) {
        const bet = prompt("enter the bet amount : "); 
        const betAmt = parseFloat(bet);
        if (betAmt < 0) {
            console.log("bet should be greater than 0");
        } else if (betAmt > balanceAmt / selectedLines) {
            console.log("insufficient balance!");
            console.log("balance : ", balanceAmt);
        } else {
            return betAmt;
        }
    }
}

const spin = () => {
    const symbols = []; 
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i=0; i < count; i++){
            symbols.push(symbol);
        }
    }
    const reels = [];
    for(let i=0; i<COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j=0; j<ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

const transpose = (reels) => {
    const rows = []; 
    for(let i=0; i<ROWS; i++) {
        rows.push([]); 
        for(let j=0; j<COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) => {
    for(const row of rows) {
        let rowstring = "";
        for(const [i, symbol] of row.entries()){
            rowstring += symbol;
            if(i != row.length - 1) {
                rowstring += " | ";
            }
        }
        console.log(rowstring);
    }
}

let balanceAmt = deposit();
console.log("amount deposited : ", balanceAmt);

const selectedLines = getNumberOfLines(); 
console.log("number of lines selected : ", selectedLines);

const bet = getBet(balanceAmt, selectedLines);
console.log("bet : ", bet); 

const reels = spin();
console.log(reels);

const rows = transpose(reels);
console.log(rows);

printRows(rows);
*/

/*function call() {
    const result = "hello"; 
    console.log(result);
    return result; 
}

const hello = call(); 
console.log(hello);*/

let arr = [1,2,3,4,5]; 

let sum = 0; 

for(let i=0; i<arr.length; i++) {
    sum = sum + arr[i]; 
}

console.log(sum);