// Starter code structure:
async function getUserWithPosts(userId) {
    // Your implementation here
    // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
    // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
    // 3. Return combined data
    try{

        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(!userResponse.ok){
            throw new Error('User not found');
        }

        const user = await userResponse.json()

        const postsResponse  = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if(!postsResponse.ok){
            throw new Error('User not found');
        }

        const posts = await postsResponse.json()


        return{
            userInfo: user,
            posts: posts
        };

    }
    catch (error){
        console.error(`Error in getUserWithPosts: ${error.message}`);
        return null;
    }

  }