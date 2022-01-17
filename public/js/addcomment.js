const newCommentHandler = async (event) => {
    event.preventDefault();
    const description = document.querySelector('#commenttext').value.trim();
    const blogpost_id = document.querySelector('#commentpost').value.trim();



    console.log("my postid is", blogpost_id)
    console.log(description)

    if (description) {
        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({
                description,
                blogpost_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace(`/blogpost/${blogpost_id}`);
        } else {
            alert('Failed to add comment');
        }
    }
}

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const comment_id = event.target.getAttribute('data-id');

      
  
      const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE',
      });
      console.log( 'my comemnt id is' ,comment_id);

  console.log(response)
      if (response.ok) {
        document.location.replace(`/`);
      } else {
        alert('Failed to delete project');
      }
    }
  };

document
    .querySelector('.new_comment')
    .addEventListener('submit', newCommentHandler);

document
    .querySelector('.comments-list')
    .addEventListener('click', delButtonHandler);

// 