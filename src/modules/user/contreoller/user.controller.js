import blogModel from "../../../../DB/model/blog.model.js";
import userModel from "../../../../DB/model/user.model.js";

export const getUser = async (req,res) =>{
    try{
        const users = await userModel.findAll({
            include:blogModel
        });
        return res.json({message:"success",users});
    }catch{
        return res.json({message:"user controller catch error",error:error.stack});
    }
}

export const updateUser = async (req,res) =>{
    try{
        const {email} = req.body;
    const {id} = req.params;
    const user = await userModel.update({ email }, {
        where: {
          id
        }
      }); 
      if(user[0]>0){
          return res.json({message:"User updated successfully",user});
      }else{
        return res.json({message:"ID invalid"});
      }
    }catch(err){
        return res.json({message:"user update catch error",error:err.stack});
    }
}

export const deleteUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.destroy({
            where: {id}
          })
          if(user[0]>0){
            return res.json({message:"User deleted successfully",user})
        }else{
            return res.json({message:"User not found"})
        }
    }catch(err){
        return res.json({message:"Delte user catch error",error:err.stack});
    }
}