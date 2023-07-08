import blogModel from "../../../../DB/model/blog.model.js";
import userModel from "../../../../DB/model/user.model.js";

export const addBlog = async (req,res)=>{
    try{
        const {title,body,UserId} = req.body;
        const blog = await blogModel.create({title,body,UserId});
        return res.json({message:"Blog created successfully",blog})
    }catch(err){
        return res.json({message:"Create blog catch error",err})
    };

}

export const getBlog = async (req,res)=>{
    try{
        const blogs = await blogModel.findAll(
{attributes:{exclude:['UserId']},
    include:{
        model:userModel,
        attributes:['name']
    }
}
        );
        return res.json({message:"blog found",blogs})

    }catch(err){
        return res.json({message:"Get blog catch error",err})

    };
};