// const postList = document.querySelector("#postList");

// const posts = 'https://jsonplaceholder.typicode.com/posts';

// fetch(posts)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((post) => {
//             postList.innerHTML += `
//                 <div class="col-12 py-2">
//                     <div class="card">
//                         <div class="card-header text-center bg-primary text-white">${post.id}</div>
//                         <div class="card-body text-center bg-danger text-white">${post.body}</div>
//                     </div>
//                 </div>
//             `;
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ****************************************************************

// const commentList = document.querySelector("#commentList");

// const comments = 'https://jsonplaceholder.typicode.com/comments';

// fetch(comments)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((comment) => {
//             commentList.innerHTML += `
//                 <div class="col-12 py-2">
//                     <div class="card">
//                         <div class="card-header text-center bg-primary text-white">${comment.email}</div>
//                         <div class="card-body text-center bg-danger text-white">${comment.body}</div>
//                     </div>
//                 </div>
//             `;
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// ***********************************************************

const albumstList = document.querySelector("#albumstList");

const albums = 'https://jsonplaceholder.typicode.com/albums';

fetch(albums)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        data.forEach((album) => {
            albumstList.innerHTML += `
                <div class="col-12 py-2">
                    <div class="card">
                        <div class="card-header text-center bg-primary text-white">${album.id}</div>
                        <div class="card-body text-center bg-danger text-white">${album.title}</div>
                    </div>
                </div>
            `;
        });
    })
    .catch((err) => {
        console.log(err);
    });

// ******************************************************

// const todosList = document.querySelector("#todosList");

// const todos = 'https://jsonplaceholder.typicode.com/todos';

// fetch(todos)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((todo) => {
//             todosList.innerHTML += `
//                 <div class="col-12 py-2">
//                     <div class="card">
//                         <div class="card-header text-center bg-primary text-white">${todo.title}</div>
//                         <div class="card-body text-center bg-danger text-white">${todo.completed}</div>
//                     </div>
//                 </div>
//             `;
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// **********************************************************

// const usersList = document.querySelector("#usersList");

// const users = 'https://jsonplaceholder.typicode.com/users';

// fetch(users)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((user) => {
//             usersList.innerHTML += `
//                 <div class="col-12 py-2">
//                     <div class="card">
//                         <div class="card-header text-center bg-primary text-white">${user.name}</div>
//                         <div class="card-body text-center bg-danger text-white">${user.email}</div>
//                     </div>
//                 </div>
//             `;
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });