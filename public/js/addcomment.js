const newCommentHandler = async (event) => {
    event.preventDefault();


    const description = document.querySelector('#description').value;


    if (description) {

        const response = await fetch(`/api/blogpost/${blogpost_id}`, {
            method: 'POST',
            body: JSON.stringify({
                description,

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

// const delButtonHandler = async (event) => {

//     if (event.target.hasAttribute('post_id')) {
//         const blogpost_id = event.target.getAttribute('post_id');
//         const response = await fetch(`/api/blogpost/${blogpost_id}`, {

//             method: 'DELETE',
//         });
//         console.log("response")
//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed to delete review');
//         }
//     }
// };

document
    .querySelector('.form-group')
    .addEventListener('click', newCommentHandler);

// document
//     .querySelector('.currentposts-list')
//     .addEventListener('click', delButtonHandler);