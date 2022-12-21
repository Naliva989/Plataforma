//change navbar styles on scroll//

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//show/hide faq answer and change icon


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq--icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

//show/hide nav menu//

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu //
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


function validateFields() {
    const emailValid = isEmailValid();

    const password = isPasswordValid();
    document.getElementById("btnLogin").disabled = !emailValid || !passwordValid;

    

// login //


}
function isEmailValid() {
    const email = document.getElementById("inputEmail").value
    if (!email) {
        return false;
    }
    return validateEmail(inputEmail);
}

function isPasswordValid() {
    const password = document.getElementById("inputPassword").value
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(inputEmail) {
    return /\S+@\S+\.\S+/.test(inputEmail);

}

function login() {
    firebase.auth().signInWithEmailAndPassword("ilan.porto@gmail.com", "pororoca123!"
            ).then(response =>{
                console.log('success', response)
                window.location.href = "cadastro.html";
            })
            .catch((error) => {
                console.log('error', response)
            });

    
}



//----//

