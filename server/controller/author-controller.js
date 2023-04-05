import Post from '../model/post.js'

export const getPostsofUser=async(request,response)=>{
    try{
        const author=await Post.find({username:request.params.username});

        response.status(200).json(author);
    }catch(error){
        response.status(500).json({error:error.message})
    }
}