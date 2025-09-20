// login functionality added
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    //fixed value cause dbms will learn later
    const mobileNumber = 1835854295;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-num').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-num').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted, pinNumberValueConverted);
    
    if(mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted){
        window.location.href = './home.html';
        
    }
    else{
        alert('Invalid Credentials');
    }
});
    