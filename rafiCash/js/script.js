let numberInput = document.getElementById('numberInput');
let passwordInput = document.getElementById('passwordInput');
let loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function(){
    let numberValue = numberInput.value;
    let passwordValue = passwordInput.value;
    if(numberValue == "01233456789" && passwordValue == "2000"){
        window.location.href = "home.html";
    }else{
        alert("Wrong Pin Number")
        numberInput.value = "";
        passwordInput.value = "";
    }
})