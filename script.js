function checkregex(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var errors = ''

    var emailregex = /^[\w.]+@\w+\.\w+$/

    if(!emailregex.test(email)) errors += 'Enter a valid email.<br>'
    if(password.length<8) errors += 'Enter a password of atleast 8 characters.<br>'
    
    if(errors){
        document.getElementById('errors').innerHTML = '<div class="error">' + errors + '</div>'
        return false
    }
    return true;
}


async function ValidateForm() {


    // var email = document.getElementById('email').value
    // var password = document.getElementById('password').value
    // var errors = ''

    // var emailregex = /^[\w.]+@\w+\.\w+$/

    // if(!emailregex.test(email)) errors += 'Enter a valid email.<br>'
    // if(password.length<8) errors += 'Enter a password of atleast 8 characters.<br>'
    
    // if(errors){
    //     document.getElementById('errors').innerHTML = '<div class="error">' + errors + '</div>'
    //     return false
    // }
    
    try {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const url = "https://reqres.in/api/login"

        const info = {
            
            email : email,
            password : password
             
        };
    
        const response = await fetch( url , {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        });

        if (!response.ok) {
            alert('Invalid email or password')           
        }
        else{
            alert('Login successful')
            const data = await response.json()
            console.log(data)
        }
             
    } catch (error) {
        console.error(error)
    }

    return false;



}


var button = document.getElementById('submit')

window.onload = function() {

    const form = document.getElementById('signin');

    form.addEventListener('submit' , function(event){
    event.preventDefault();
    if( checkregex() ){
        ValidateForm();
    }
    else{
        alert("wrong");
    }
})
}

document.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
        button.click();
    }
})