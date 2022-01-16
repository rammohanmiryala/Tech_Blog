const newCommentHandler = async (event) => {
    event.preventDefault();
    const description = document.querySelector('#commenttext').value.trim();
    const post_id = document.querySelector('#commentpost').value.trim();
    

    // console.log(post_id)
    // console.log(description)

    if (description) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                description,
                post_id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace(`/blogpost/${post_id}`);
        } else {
            alert('Failed to add comment');
        }
    }
}

document
    .querySelector('.new_comment')
    .addEventListener('submit', newCommentHandler);