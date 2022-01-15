const newCommentHandler = async (event) => {
    event.preventDefault();


    const description = document.querySelector('#description').value;


    if (description) {

        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                description,
                user_id: req.session.user_id


            }),

            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.replace('homepage');
        } else {
            alert('Failed to add comment');
        }
    }
}

document
    .querySelector('.textareacomment')
    .addEventListener('submit', newCommentHandler);
