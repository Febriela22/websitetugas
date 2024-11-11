var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')



var signUpArray = []
if (localStorage.getItem('users') !== null) {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}


function login() {

    var password = signinPassword.value
    var email = signinEmail.value

    if (signinPassword.value == "" || signinEmail.value == "") {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    else{
        for (var i = 0; i < signUpArray.length; i++) {
            if ( email==signUpArray[i].Email && password==signUpArray[i].Password) {
                localStorage.setItem('WelcomeUsername',JSON.stringify(signUpArray[i].Name));
                location.replace("home.html");
            }
            else if(email!==signUpArray[i].Email && password!==signUpArray[i].Password){
                document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
            else{
                document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            }
        }

    }


}


function clearForm() {
    signinEmail.value = null;
    signinPassword.value = null;
    signupEmail.value = null;
    signupPassword.value = null;
    signupName.value = null;
}




