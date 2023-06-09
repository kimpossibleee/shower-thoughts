import {connectToDB} from '@utils/database'
import Post from '@models/post'

export const POST = async (req) => {
    const {userId, post} = await req.json();

    try{
        await connectToDB();
        const newPost = new Post(
            {user: userId,
                post}
        )
        await newPost.save()
        return new Response(JSON.stringify(newPost), {status:201})
    }catch(error){
        return new Response('Could not create your post', {status: 500})
    }
}
