import userModel from "../../../../DB/model/user.model.js";

export const signup = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = await userModel.create({name,email,password});
        return res.json({message:"success registration"});
    }catch(err){
        if(err.original?.errno == 1062){
            return res.json({message:"email already registered"});

        }
        return res.json({message:"catch error creating user",error:err.stack});
    }
}

export const signin = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const checkUser = await userModel.findAll({
            where: {email,password}
        });
        if (!checkUser.length){
            return res.json({message:"user not found"});
        }else{
            return res.json({message:"login successfully"});
        }
    }catch(err){
        return res.json({message:"login catch error",error:err.stack});

    }
};
