const myForm = document.getElementById('signin__form'),
    signActive = document.querySelector('.signin');

signActive.classList.add('signin_active');

myForm.addEventListener('submit', async e => {

    e.preventDefault();

    const formData = new FormData(e.target),

        response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
            method: 'post',
            body: formData

        });

    const json = await response.json();
    if(json.success) {
        signActive.classList.remove('signin_active');

        const welcome = document.querySelector('.welcome'),
            userId = welcome.querySelector('#user_id');

        welcome.classList.add('welcome_active');
        userId.innerHTML = json.user_id;

    }

})

/* myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
        method: 'post',
        body: formData
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        const bobik = JSON.parse(text);
        alert(bobik.success);
    })

})
 */





