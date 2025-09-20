const validPin = 1234; ///cause we didn't start work with databse
const transactionData = [];


// function to get input values by id (reusable function)
function getInputValueNumber (id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseInt(inputValue);
    return inputValueNumber;
}

function getInputValue (id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

// function to get innertext value by id (reusable function)
function getInnerText (id) {
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextValueNumber = parseInt(innerTextValue);
    return innerTextValueNumber;
}

//function to set innertext value by id (reusable function)
function setInnerText ( value) {
    document.getElementById('available-balance').innerText = value;
}

//function for toggle resuable
function toggleDisplay (id) 
{
    const forms = document.getElementsByClassName('form');
   for(const form of forms){
    form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

//function for toggle button active class reusable
function handleButtonToggle (id)
{
    const formBtns = document.getElementsByClassName('form-btn');
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]");   
        btn.classList.add("border-gray-300"); 
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]");

}


// add money button event handler
document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission if inside a form
    // console.log('Add Money button clicked');

    // const bank = document.getElementById('add-bank').value;
    const bank = getInputValue('add-bank');
    // const accountNumber = document.getElementById('account-add').value;
    const accountNumber = getInputValue('account-add');
    // const amount = parseInt(document.getElementById('amount-add').value);
    const amount = getInputValueNumber('amount-add');
    // const pin = parseInt(document.getElementById('add-pin').value);
    if(amount <= 0){
        alert('Please enter valid amount');
        return;
    }   

    const pin = getInputValueNumber('add-pin');

//    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');

    if(accountNumber.length < 11){
        alert('Please enter 11 digit account number');
        return;
    }

    if(pin !== validPin){
        alert('Invalid Pin');
        return;
    }



   const totalAvailableBalance = availableBalance + amount;
    // document.getElementById('available-balance').innerText = totalAvailableBalance;
    setInnerText(totalAvailableBalance);


    const data = {
        name : "Add Money",
       date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

    // console.log(transactionData);
    // for(const transaction of transactionData){
    //     console.log(transaction);
    //


});



// cash out button event handler

document.getElementById('withdraw-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission if inside a form
      // console.log('Withdraw Money button clicked');    
    //   const accountNumber = document.getElementById('withdraw-account-add').value;
        const accountNumber = getInputValue('withdraw-account-add');
    //    const amount = parseInt(document.getElementById('withdraw-amnt-add').value);
         const amount = getInputValueNumber('withdraw-amnt-add');
    //    const pin = parseInt(document.getElementById('withdraw-pin').value);
            const pin = getInputValueNumber('withdraw-pin');

    //    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const availableBalance = getInnerText('available-balance');

        if(amount > availableBalance || amount <= 0 ){
        alert('Invalid Amount');
        return;
    }


       if(accountNumber.length < 11){
        alert('Please enter 11 digit account number');
        return;
    }

    if(pin !== validPin){
        alert('Invalid Pin');
        return;
    }

    
    const totalNewAvailableBalance = availableBalance - amount;
    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);

    const data = {
        name : "Cash Out",
       date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);


});

// transfer money button event handler
document.getElementById('tansfer-money-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission if inside a form
      // console.log('Transfer Money button clicked');    
    //   const accountNumber = document.getElementById('transfer-account-add').value;
        const accountNumber = getInputValue('transfer-account-add');
    //    const amount = parseInt(document.getElementById('transfer-amnt-add').value);
         const amount = getInputValueNumber('transfer-amnt-add');
    //    const pin = parseInt(document.getElementById('transfer-pin').value);
            const pin = getInputValueNumber('transfer-pin');

    //    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const availableBalance = getInnerText('available-balance');
         if(accountNumber.length < 11){     
        alert('Please enter 11 digit account number');
        return;
    }   
    if(pin !== validPin){
        alert('Invalid Pin');
        return;
    }
    if(amount > availableBalance){
        alert('Insufficient Balance');
        return;
    }   
    const totalNewAvailableBalance = availableBalance - amount;
    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance);

    const data = {
        name : "Transfer Money",
       date : new Date().toLocaleTimeString()
    }

    transactionData.push(data);

});

// get bonus button event handler
document.getElementById('get-bonus-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission if inside a form         
        // console.log('Get Bonus button clicked');
    // const coupon = document.getElementById('bonus-coupon-add').value;
    const coupon = getInputValue('bonus-coupon-add');
    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance'); 
    if(coupon === 'free100'){
        const totalNewAvailableBalance = availableBalance + 100;
        // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
        setInnerText(totalNewAvailableBalance);
    }
    else{
        alert('Invalid Coupon');
        return;
    }
});

//pay bill button event handler
document.getElementById('pay-bill-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission if inside a form
        // console.log('Pay Bill button clicked');
    // const billNumber = document.getElementById('bill-number-add').value;
    const billNumber = getInputValue('bill-number-add');
    // const amount = parseInt(document.getElementById('bill-amnt-add').value);
    const amount = getInputValueNumber('bill-amnt-add');
    // const pin = parseInt(document.getElementById('bill-pin').value);
    const pin = getInputValueNumber('bill-pin');

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const availableBalance = getInnerText('available-balance');
    if(billNumber.length < 11){
        alert('Please enter 11 digit bill number');
        return;
    }
    if(pin !== validPin){
        alert('Invalid Pin');
        return;
    }
    if(amount > availableBalance){
        alert('Insufficient Balance');
        return;
    }
    const totalNewAvailableBalance = availableBalance - amount;
    // document.getElementById('available-balance').innerText = totalNewAvailableBalance;
    setInnerText(totalNewAvailableBalance); 

    const data = {
        name : "Pay Bill",
       date : new Date().toLocaleTimeString()
    }
    transactionData.push(data);
});

// transaction history button event handler
document.getElementById('transaction-btn').addEventListener('click', function() 
{
    // console.log('Transaction History button clicked');
    const transactionContainer = document.getElementById('transaction-container');

    transactionContainer.innerHTML = ''; // Clear previous content

    for (const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-white rounded-xl p-4  flex justify-between items-center ">
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] p-3 rounded-full">
                            <img src="./assets/wallet1.png" alt="" class="mx-auto">
                        </div>
                        <div class="ml-5">
                            <h1 class="font-semibold">${data.name}</h1>
                            <p class="text-xs">${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `;
        transactionContainer.appendChild(div);
    }
}
);



// toggling feature
/* document.getElementById('add-btn').addEventListener('click', function() {
   // Hide the Cash Out section
    document.getElementById('cash-out-parent').style.display = 'none';
    // Show the Add Money section
    document.getElementById('add-money-parent').style.display = 'block';
    
})
document.getElementById('cash-btn').addEventListener('click', function() {
   // Hide the add money section
    document.getElementById('add-money-parent').style.display = 'none';
    // Show the Cash out section
    document.getElementById('cash-out-parent').style.display = 'block';
    
})  */

//  toggling process which use most /
document.getElementById('add-btn').addEventListener('click', function() {
//     const forms = document.getElementsByClassName('form');
//    for(const form of forms){
//     form.style.display = 'none';
//     }
//     document.getElementById('add-money-parent').style.display = 'block';
   toggleDisplay('add-money-parent');
    handleButtonToggle('add-btn');
    
})
document.getElementById('cash-btn').addEventListener('click', function() {
    toggleDisplay('cash-out-parent');
    handleButtonToggle('cash-btn');
    
})
document.getElementById('transfer-btn').addEventListener('click', function() {
    toggleDisplay('transfomer-money-parent');
    handleButtonToggle('transfer-btn');
    
})
document.getElementById('get-btn').addEventListener('click', function() {
    toggleDisplay('get-bonus-parent');
    handleButtonToggle('get-btn');
    
})
document.getElementById('pay-btn').addEventListener('click', function() {
    toggleDisplay('pay-bill-parent');
    handleButtonToggle('pay-btn');
    
})
document.getElementById('transaction-btn').addEventListener('click', function() {
    toggleDisplay('transection-parent');
    handleButtonToggle('transaction-btn');
    
})