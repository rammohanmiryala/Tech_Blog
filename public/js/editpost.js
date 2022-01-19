// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const posttitle = document.querySelector('input[name="post-title"]').value.trim();
//   const postdescription = document.querySelector('textarea[name="post-body"]').value.trim();
//   const postId = document.querySelector('input[name="updateID"]').value;

//   console.log(title)
//   console.log(description)
//   console.log(postId)

//   if (title && description) {

//     const response = await fetch(`/api/blogpost/${postId}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         posttitle,
//         postdescription,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log(response);
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to update blogpost');
//     }
//   }
// }

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

// document
//   .querySelector('.new-post-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.delete-btn')
//   .addEventListener('click', delButtonHandler);


const postId = document.querySelector('input[name="post-id"]').value;
console.log("testing");
console.log("my post iid is" ,postId);

// const id = window.location.toString().split('/')[
//   window.location.toString().split('/').length - 1
// ];

const editFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  console.log(postTitle);
  console.log(postContent);
  console.log(postId);
  

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};
// WHY ONE BUTTON IS SUBMIT AND THE OTHER IS CLICK?
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
