
let btn = document.getElementById("button")


btn.addEventListener("click", function(e){
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('Password').value

    if(email){
        if (password) {

            if (email == "test@gmail.com" && password == "1234")
            alert('hello test')
                else {
                    alert(' test')
                }
            
        } else {
            alert('entre password')
        }

        }

    else{

        alert('entre email')
    }
    
   
})






