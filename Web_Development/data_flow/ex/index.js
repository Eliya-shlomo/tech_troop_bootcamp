// 1. מערך הפוסטים עם כמה אובייקטים ראשוניים
const posts = [
    { name: "Eliya", text: "Hello everyone! This is my first post." },
    { name: "Bob", text: "Does anyone know where my ball went?" }
];

const render = function() {
    const postsContainer = document.getElementById("posts-container");
    
    postsContainer.innerHTML = "";

    for (let post of posts) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        
        postDiv.innerHTML = `<strong>${post.name}:</strong> ${post.text}`;
        
        postsContainer.appendChild(postDiv);
    }
};

render();

const btn = document.getElementById("submit-btn");

btn.onclick = function() {
    const nameInput = document.getElementById("name-input");
    const textInput = document.getElementById("text-input");

    const nameValue = nameInput.value;
    const textValue = textInput.value;

    if (nameValue === "" || textValue === "") {
        alert("Please fill out both fields!");
        return;
    }

    posts.push({
        name: nameValue,
        text: textValue
    });

    nameInput.value = "";
    textInput.value = "";

    render();
};