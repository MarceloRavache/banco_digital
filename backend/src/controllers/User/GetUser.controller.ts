import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../../entity/Account";
import { CreditCard } from "../../entity/CreditCard";
import { User } from "../../entity/User";

export const GetUser = async (req:Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    const user = await getRepository(User).findOne(id);

    const user_account = await getRepository(Account).findOne(user.id_account);

    const user_card = await getRepository(CreditCard).findOne(user.id_credit_card);

    user.password = "";

    return res.json({...user, ...user_account, ...user_card, id: user.id});
}