import {connectToDB} from '@utils/database'
import Post from '@models/post'

export const GET = async(request) => {
    try{
        await connectToDB();

        const posts = await Post.find({}).populate('user')

        return new Response(JSON.stringify(posts), {status:200})
    } catch (error) {
        return new Response('Failed to retrieve the data', {status:500})
    }
}
