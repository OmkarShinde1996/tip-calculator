//There are 3 function I must need to implement (Don't change function names)
//==============================================
//calculateBill()
//increasePeople()
//decreasePeople()

//Below div ids I need to access
//===========================================================
//billTotalInput
//tipInput
//numberOfPeople
//perPersonTotal

//Implementation
//Getting global access to all the input/dives here
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

//getting number of peopel from numberOfPeople div and casting it in number
let numOfPeople = Number(numberOfPeopleDiv.innerText);



//First function : calculat the total bill per person
const calculateBill = () => {
    //Getting billTotal from user and converting it in number
    const bill = Number(billTotalInput.value);
    //Calculating the tip percentage by getting tip value from user
    const tipPercentage = Number(tipInput.value)/100;
    //calculating the total tip amount
    const totalTipAmount = bill * tipPercentage;
    //calculating total bill amount using 'bill' & 'totalTipAmount'
    const totalBillAmount = bill + totalTipAmount;
    //console.log({totalBillAmount});
    //calculating per person total
    const perPersonTotal = totalBillAmount/numOfPeople;
    //showing totalBillAmount on DOM
    perPersonTotalDiv.innerHTML = `${perPersonTotal.toFixed(2)}`; //toFixed(2) function will limit decimal numbers to show only 2
}

//Second function : split the bill between more people
const increasePeople = () => {
    //updating the number of peoples by 1 when + button gets clicked
    numOfPeople++;
    //showing updated number of people on DOM
    numberOfPeopleDiv.innerText = numOfPeople;
    //calling calculateBill function to caculate the bill based on number of people
    calculateBill();
}

//Third function : split the bill between fewer people
const decreasePeople = () => {
    //Basic gaurd clause to protect the numOfPeople going below 1
    if(numOfPeople <= 1){
        return;
    }
    //updating the number of peoples by 1 when - button gets clicked
    numOfPeople--;
    //showing updated number of people on DOM
    numberOfPeopleDiv.innerText = numOfPeople;
    //calling calculateBill function to caculate the bill based on number of people
    calculateBill();
}