const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;


  if (title && description) {

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
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('post_id')) {
    const review_id = event.target.getAttribute('post_id');
    const response = await fetch(`/api/blogpost/${blogpost_id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete review');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.currentposts')
  .addEventListener('delete', delButtonHandler);