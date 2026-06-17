
async function facebook(userId){
    try{
        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if(!usersResponse.ok){
            throw new Error('Users not found');
        }
        const users = await usersResponse.json()


        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        if(!postsResponse.ok){
            throw new Error('Posts not found');
        }
        const posts = await postsResponse.json()


        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        if(!commentsResponse.ok){
            throw new Error('Comments not found');
        }
        const comments = await commentsResponse.json()


        const totalUsers = users.length;
        const totalPosts = posts.length;
        const totalComments = comments.length;


        const avgPostsPerUser = totalUsers > 0 ? totalPosts / totalUsers : 0;
        const avgCommentsPerPost = totalPosts > 0 ? totalComments / totalPosts : 0;

        const usersAnalysis = users.map(user =>{
            const userPosts = posts.filter(post => post.userId === user.id)
            const postCount = userPosts.length

            const userPostIds = userPosts.map(post => post.id);
            const commentCount = comments.filter(comment => userPostIds.includes(comment.postId)).length;

            return{
                name: user.name,
                postCount: postCount,
                commentCount: commentCount
            };
        });


        const topUsers = usersAnalysis
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 3);

        const recentPosts = posts
            .sort((a, b) => b.id - a.id)
            .slice(0, 5);


        return {
            summary: {
                totalUsers,
                totalPosts,
                totalComments,
                avgPostsPerUser,
                avgCommentsPerPost
            },
            topUsers,
            recentPosts
        };

        } catch (error) {
            console.error(`Error in facebook function: ${error.message}`);
            return null;
        }
    }











