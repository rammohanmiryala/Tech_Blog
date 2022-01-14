const signupFormHandler = async (event) => {
  event.preventDefault();

  const fullname = document.querySelector('#fullname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (fullname && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ fullname, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      swal("Account created!", "You clicked the button!", "success");
      swal({
        title: "Account created!",
        text: "You clicked the button!",
        icon: "success",
        
      })
      
    } else {
      alert(response.statusText);
      

    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
