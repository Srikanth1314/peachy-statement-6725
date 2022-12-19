function store(){


    if(localStorage.getItem('user')){
        let obj = JSON.parse(localStorage('user'))

        document.getElementById('email').value = obj.email
        document.getElementById('password').value = obj.password
        document.getElementById('repeat_password').value = obj.repeat_password
        document.getElementById('name').value = obj.name
        document.getElementById('address').value = obj.address
        document.getElementById('local').value = obj.local
    }


    let form = document.getElementById("form")
    
        form.addEventListener("submit", function (e) {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let repeat_password = document.getElementById('repeat_password').value;
            let name = document.getElementById('name').value
            let address = document.getElementById('address').value;
            let local = document.getElementById('local').value;


            let user = {
                email:email,
                password:password,
                repeat_password:repeat_password,
                name:name,
                address:address,
                local:local
            }

            localStorage.setItem('user',JSON.stringify(user))  
          
    
            alert("Your details are saved")

    })
}

function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('emailEL');
    var userPw = document.getElementById('passwordEL');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('You are logged in.');
    }
}

    