async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if ( email && password) {
    const response = await fetch('/sign-up', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok){
      document.location.replace('/home');
    } else {
      alert(`Signed in as ${email}.`);
    }
    document.location.replace('/home');
  }
}


async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert("Successfully logged in!");
    }
    document.location.replace('/home');
  }
}



document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);