const forms=document.querySelector('.forms'),
      pwShowHide=document.querySelectorAll('.eye-icon'),
      //pwFields=document.querySelectorAll('.password')
      links=document.querySelectorAll('.link');

// js code to show/hide password and change icon

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () =>{
     let pwFields= eyeIcon.parentElement.parentElement.querySelectorAll('.password');     

        pwFields.forEach(password => {
            if(password.type==='password'){
             password.type='text';
             eyeIcon.classList.replace('bx-hide','bx-show');
             return;
        }
        password.type='password';
        eyeIcon.classList.replace('bx-show','bx-hide');
        });
        });
    });
    
    //js code to target links login to signup

    links.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault(); //preventing from submit
            forms.classList.toggle('show-signup');
        });
    });