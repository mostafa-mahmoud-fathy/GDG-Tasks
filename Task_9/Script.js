async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching users:", error);
        return [];
    }
}
async function renderUsers() {
    const users = await getUsers();
    const tableBody = document.getElementById("user-table-body");

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching posts:", error);
        return [];
    }
}
async function renderPosts() {
    const posts = await getPosts();
    const tableBody = document.getElementById("post-table-body");

    posts.forEach(post => {
        const safeTitle = encodeURIComponent(post.title);
        const safeBody = encodeURIComponent(post.body);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td><button class = "editBtn" onclick="editPost(${post.id}, '${safeTitle}', '${safeBody}')">Edit</button></td>
        `;

        tableBody.appendChild(row);
    });
}
async function updatePost(id, title, body) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body })
        });

        const result = await response.json();
        alert("Post updated : " + JSON.stringify(result));
    } catch (error) {
        console.error("Error updating post:", error);
    }
}
function editPost(id, encodedTitle, encodedBody) {
    const title = decodeURIComponent(encodedTitle);
    const body = decodeURIComponent(encodedBody);

    document.getElementById("edit-form").style.display = "block";
    document.getElementById("edit-id").value = id;
    document.getElementById("edit-title").value = title;
    document.getElementById("edit-body").value = body;
}


function cancelEdit() {
    document.getElementById("edit-form").style.display = "none";
}
document.getElementById("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const id = document.getElementById("edit-id").value;
    const title = document.getElementById("edit-title").value;
    const body = document.getElementById("edit-body").value;

    await updatePost(id, title, body);
    cancelEdit();
    renderPosts();
});

renderUsers();
renderPosts();

