const Renderer = function () {

    const renderPosts = function (posts) {
        $("#posts").empty();

        for (let post of posts) {
            
            const $postDiv = $(`<div class="post" data-id="${post.id}"></div>`);
            
            $postDiv.append(`<div class="post-text">${post.text}</div>`);
            $postDiv.append(`<div class="delete" data-id="${post.id}">Delete Post</div>`);

            const $commentsDiv = $(`<div class="comments"></div>`);

            for (let comment of post.comments) {
                const commentHTML = `
                    <div class="comment" data-id="${comment.id}">
                        <span class="delete-comment" data-id="${comment.id}">X</span>
                        <span class="comment-text">${comment.text}</span>
                    </div>
                `;
                $commentsDiv.append(commentHTML);
            }

            $postDiv.append($commentsDiv);

            $postDiv.append(`<input type="text" placeholder="Got something to say?" class="comment-input">`);
            $postDiv.append(`<button class="comment-button">Comment</button>`);

            $("#posts").append($postDiv);
        }
    };

    return {
        renderPosts: renderPosts
    };
};



