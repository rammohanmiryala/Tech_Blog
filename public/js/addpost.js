async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
 
  
    const response = await fetch(`/api/dashboard`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
      }),

      
      headers: {
        'Content-Type': 'application/json',
      },
      
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add post');
    }
  }
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
