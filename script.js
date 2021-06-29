var loginbtn = document.getElementById('login');
loginbtn.addEventListener('click',function(){
    const submit_area = document.getElementById('submit-area');
    submit_area.style.display='none';
    const tranjection = document.getElementById('tranjection-area');
    tranjection.style.display = 'block';
})

var depositeBtn = document.getElementById('deposite-btn');
depositeBtn.addEventListener('click',function(){
    var depositeAmount = document.getElementById('deposite-amount').value;
    var depositeNumber = parseFloat(depositeAmount);

    var depositeValue = document.getElementById('deposite-value').innerText;
    var currentValue = parseFloat(depositeValue);
    var totalDeposite = depositeNumber + currentValue;
    document.getElementById('deposite-value').innerText = totalDeposite;

    var balance = document.getElementById('balance').innerText;
    var balanceValue = parseFloat(balance);
    var totalBalance = balanceValue + depositeNumber;
    document.getElementById('balance').innerText = totalBalance;

    document.getElementById('deposite-amount').value = "";

})

var withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){
    var withdrawAmount = document.getElementById('withdraw-amount').value;
    var withdrawNumber = parseFloat(withdrawAmount);

    var withdrawValue = document.getElementById('withdraw-value').innerText;
    var currentValue = parseFloat(withdrawValue);
    var totalDeposite = withdrawNumber + currentValue;
    document.getElementById('withdraw-value').innerText = totalDeposite;

    var balance = document.getElementById('balance').innerText;
    var balanceValue = parseFloat(balance);
    var totalBalance = balanceValue - withdrawNumber;
    document.getElementById('balance').innerText = totalBalance;

    document.getElementById('withdraw-amount').value = "";
})

