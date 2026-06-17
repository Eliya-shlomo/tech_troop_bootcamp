    
const Tweeter = function () {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


    let postIdCounter    = 2
    let commentIdCounter = 6

    const getPosts = function (){
        return posts
    }

    const addPost  = function(text){
        postIdCounter++
        const new_post = {
            text : text,
            id   : 'p' + postIdCounter,
            comments : []
        }
        posts.push(new_post)     
    }

    const removePost = function(postId){
        for(let i=0; i< posts.length; i++){
            if(postId === posts[i].id){
                posts.splice(i,1)
                break
            }
        }
    }

    const addComment = function (postId, text) {
        for (let post of posts) {
            if (post.id === postId) {
                commentIdCounter++;
                const newComment = {
                    id: "c" + commentIdCounter,
                    text: text
                };
                post.comments.push(newComment);
                break;
            }
        }
    };

    const removeComment = function (postId, commentId) {
        for (let post of posts) {
            if (post.id === postId) {
                for (let i = 0; i < post.comments.length; i++) {
                    if (post.comments[i].id === commentId) {
                        post.comments.splice(i, 1);
                        return; 
                    }
                }
            }
        }
    };

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    };

}

