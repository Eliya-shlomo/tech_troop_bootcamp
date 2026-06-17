const tweeter = Tweeter();
const renderer = Renderer();

const allPosts = tweeter.getPosts();
renderer.renderPosts(allPosts);


$("#post").on("click", function () {
    const textFromTheInput = $("#input").val();
    
    if (textFromTheInput != "") {
        tweeter.addPost(textFromTheInput);
        $("#input").val("");
        
        const updatedPosts = tweeter.getPosts();
        renderer.renderPosts(updatedPosts);
    }
});


$("#posts").on("click", ".delete", function () {
    const thePostElement = $(this).parent();
    const thePostId = thePostElement.attr("data-id");
    
    tweeter.removePost(thePostId);
    
    const postsAfterDelete = tweeter.getPosts();
    renderer.renderPosts(postsAfterDelete);
});



$("#posts").on("click", ".comment-button", function () {
    const thePostElement = $(this).parent();
    const thePostId = thePostElement.attr("data-id");
    
    const inputInsideThisPost = thePostElement.find(".comment-input");
    const commentText = inputInsideThisPost.val();
    
    if (commentText != "") {
        tweeter.addComment(thePostId, commentText);
        inputInsideThisPost.val("");
        
        const postsWithNewComment = tweeter.getPosts();
        renderer.renderPosts(postsWithNewComment);
    }
});


$("#posts").on("click", ".delete-comment", function () {
    const theCommentId = $(this).attr("data-id");
    
    const thePostId = $(this).parent().parent().parent().attr("data-id");
    
    tweeter.removeComment(thePostId, theCommentId);
    
    const postsAfterCommentDelete = tweeter.getPosts();
    renderer.renderPosts(postsAfterCommentDelete);
});