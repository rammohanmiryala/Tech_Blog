const newCommentHandler = async (event) => {
    event.preventDefault();
    const description = document.querySelector('#commenttext').value;

    if (description) {
        const response = await fetch(`/api/comment`, {
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
            document.location.relode();
        } else {
            alert('Failed to add comment');
        }
    }
}

document
    .querySelector('.new_comment')
    .addEventListener('submit', newCommentHandler);