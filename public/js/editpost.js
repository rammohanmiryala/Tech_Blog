const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const updatepost_id = document.querySelector('#updatepost').value.trim();

  console.log(title)
  console.log(description,)
  console.log(updatepost_id,)

  if (title && description) {

    const response = await fetch(`/api/blogpost/edit/${updatepost_id}`, {
      method: 'PUT',
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
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blogpost');
    }
  }
}

// const delButtonHandler = async (event) => {
  
//   if (event.target.hasAttribute('data-id')) {
//     const blogpost_id = event.target.getAttribute('data-id');
//     const response = await fetch(`/api/blogpost/${blogpost_id}`, {
      
//       method: 'DELETE',
//     });
//     console.log("response")
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete review');
//     }
//   }
// };

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.new-post-form')
//   .addEventListener('click', delButtonHandler);