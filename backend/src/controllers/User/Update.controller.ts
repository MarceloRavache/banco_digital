import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const UpdateUser = async (req:Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    const user = await getRepository(User).findOne(id);

    if(user){
        const get_user = { email: req.body }
        getRepository(User).merge(user,get_user);
        const result = await getRepository(User).save(user);
        user.password = "";

        return res.json({result});
    }

    return res.status(404).json({message:"User not found!"});
}